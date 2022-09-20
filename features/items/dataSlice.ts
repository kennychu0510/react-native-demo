import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../../app/store';
import i18n from '../../i18n';

interface articleState {
  data: Data | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: undefined | string;
}

interface Data {
  healthCare: Category;
  stationary: Category;
  snack: Category;
  infantArticle: Category;
  others: Category;
}

export type CategoryType =
  | 'healthCare'
  | 'stationary'
  | 'snack'
  | 'infantArticle'
  | 'others';

interface Category {
  category: {name: CategoryType};
  items: Item[];
}

interface Item {
  id: string;
  code: string;
  image: string;
  name: string;
  name_tc: string;
  name_sc: string;
  name_en: string;
  description: string;
  description_tc: string;
  description_sc: string;
  description_en: string;
  limit: string;
  limit_tc: string;
  limit_sc: string;
  limit_en: string;
  weight: string;
  max_quota: string;
  item_group_id: string;
  replace: boolean;
}

const initialState: articleState = {
  data: null,
  status: 'idle',
  error: undefined,
};

export const articleSlice = createSlice({
  name: 'articles',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchArticles.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        addTranslation(action.payload);
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

const articlesAPI = `https://dev.prismcubehk.com/hkcsd/index.php/api/visitStatusHandInArticles/getAll?lang=tc`;

export const fetchArticles = createAsyncThunk('fetchArticles', async () => {
  const response = await fetch(articlesAPI);
  const json = (await response.json()) as Data;
  return json;
});

export const articleStatus = (state: RootState) => state.article.status;
export const articleData = (state: RootState) => state.article.data;

export default articleSlice.reducer;

function addTranslation(data: Data) {
  for (let category in data) {
    
    /* ADD CATEGORY NAMES TO i18N */
    const categoryChineseName = data[category as CategoryType].category.name;
    addTranslationToEngAndChi(category, categoryChineseName);

    /* ADD ITEMS TO i18N */
    const items = data[category as CategoryType].items;
    for (let item of items) {
      const { name_en, name_tc, description_en, description_tc } = item; 
      addTranslationToEngAndChi(name_en, name_tc);
      addTranslationToEngAndChi(description_en, description_tc);
    }
  }
  // console.log(i18n)
}

function addTranslationToEngAndChi(english: string, chinese: string) {
  i18n.addResource('en', 'data', english, english);
  i18n.addResource('ch', 'data', english, chinese);
}
