export interface Data {
  "type": "object",
  "properties": {
    "healthCare": {
      "type": "object",
      "properties": {
        "category": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            }
          },
          "required": [
            "name"
          ]
        },
        "items": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string"
              },
              "code": {
                "type": "string"
              },
              "image": {
                "type": "string",
                "format": "uri"
              },
              "name": {
                "type": "string"
              },
              "name_tc": {
                "type": "string"
              },
              "name_sc": {
                "type": "string"
              },
              "name_en": {
                "type": "string"
              },
              "description": {
                "type": "string"
              },
              "description_tc": {
                "type": "string"
              },
              "description_sc": {
                "type": "string"
              },
              "description_en": {
                "type": "string"
              },
              "limit": {
                "type": "string"
              },
              "limit_tc": {
                "type": "string"
              },
              "limit_sc": {
                "type": "string"
              },
              "limit_en": {
                "type": "string"
              },
              "weight": {
                "type": "string"
              },
              "max_quota": {
                "type": "string"
              },
              "item_group_id": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "replace": {
                "type": "boolean"
              }
            },
            "required": [
              "id",
              "code",
              "image",
              "name",
              "name_tc",
              "name_sc",
              "name_en",
              "description",
              "description_tc",
              "description_sc",
              "description_en",
              "limit",
              "limit_tc",
              "limit_sc",
              "limit_en",
              "weight",
              "max_quota",
              "item_group_id",
              "replace"
            ]
          }
        }
      },
      "required": [
        "category",
        "items"
      ]
    },
    "stationary": {
      "type": "object",
      "properties": {
        "category": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            }
          },
          "required": [
            "name"
          ]
        },
        "items": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string"
              },
              "code": {
                "type": "string"
              },
              "image": {
                "type": "string",
                "format": "uri"
              },
              "name": {
                "type": "string"
              },
              "name_tc": {
                "type": "string"
              },
              "name_sc": {
                "type": "string"
              },
              "name_en": {
                "type": "string"
              },
              "description": {
                "type": "string"
              },
              "description_tc": {
                "type": "string"
              },
              "description_sc": {
                "type": "string"
              },
              "description_en": {
                "type": "string"
              },
              "limit": {
                "type": "string"
              },
              "limit_tc": {
                "type": "string"
              },
              "limit_sc": {
                "type": "string"
              },
              "limit_en": {
                "type": "string"
              },
              "weight": {
                "type": "string"
              },
              "max_quota": {
                "type": "string"
              },
              "item_group_id": {
                "type": "string"
              },
              "replace": {
                "type": "boolean"
              }
            },
            "required": [
              "id",
              "code",
              "image",
              "name",
              "name_tc",
              "name_sc",
              "name_en",
              "description",
              "description_tc",
              "description_sc",
              "description_en",
              "limit",
              "limit_tc",
              "limit_sc",
              "limit_en",
              "weight",
              "max_quota",
              "item_group_id",
              "replace"
            ]
          }
        }
      },
      "required": [
        "category",
        "items"
      ]
    },
    "snack": {
      "type": "object",
      "properties": {
        "category": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            }
          },
          "required": [
            "name"
          ]
        },
        "items": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string"
              },
              "code": {
                "type": "string"
              },
              "image": {
                "type": "string",
                "format": "uri"
              },
              "name": {
                "type": "string"
              },
              "name_tc": {
                "type": "string"
              },
              "name_sc": {
                "type": "string"
              },
              "name_en": {
                "type": "string"
              },
              "description": {
                "type": "string"
              },
              "description_tc": {
                "type": "string"
              },
              "description_sc": {
                "type": "string"
              },
              "description_en": {
                "type": "string"
              },
              "limit": {
                "type": "string"
              },
              "limit_tc": {
                "type": "string"
              },
              "limit_sc": {
                "type": "string"
              },
              "limit_en": {
                "type": "string"
              },
              "weight": {
                "type": "string"
              },
              "max_quota": {
                "type": "string"
              },
              "item_group_id": {
                "type": "string"
              },
              "replace": {
                "type": "boolean"
              }
            },
            "required": [
              "id",
              "code",
              "image",
              "name",
              "name_tc",
              "name_sc",
              "name_en",
              "description",
              "description_tc",
              "description_sc",
              "description_en",
              "limit",
              "limit_tc",
              "limit_sc",
              "limit_en",
              "weight",
              "max_quota",
              "item_group_id",
              "replace"
            ]
          }
        }
      },
      "required": [
        "category",
        "items"
      ]
    },
    "infantArticle": {
      "type": "object",
      "properties": {
        "category": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            }
          },
          "required": [
            "name"
          ]
        },
        "items": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string"
              },
              "code": {
                "type": "string"
              },
              "image": {
                "type": "string",
                "format": "uri"
              },
              "name": {
                "type": "string"
              },
              "name_tc": {
                "type": "string"
              },
              "name_sc": {
                "type": "string"
              },
              "name_en": {
                "type": "string"
              },
              "description": {
                "type": "string"
              },
              "description_tc": {
                "type": "string"
              },
              "description_sc": {
                "type": "string"
              },
              "description_en": {
                "type": "string"
              },
              "limit": {
                "type": "string"
              },
              "limit_tc": {
                "type": "string"
              },
              "limit_sc": {
                "type": "string"
              },
              "limit_en": {
                "type": "string"
              },
              "weight": {
                "type": "string"
              },
              "max_quota": {
                "type": "string"
              },
              "item_group_id": {
                "type": "string"
              },
              "replace": {
                "type": "boolean"
              }
            },
            "required": [
              "id",
              "code",
              "image",
              "name",
              "name_tc",
              "name_sc",
              "name_en",
              "description",
              "description_tc",
              "description_sc",
              "description_en",
              "limit",
              "limit_tc",
              "limit_sc",
              "limit_en",
              "weight",
              "max_quota",
              "item_group_id",
              "replace"
            ]
          }
        }
      },
      "required": [
        "category",
        "items"
      ]
    },
    "others": {
      "type": "object",
      "properties": {
        "category": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            }
          },
          "required": [
            "name"
          ]
        },
        "items": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string"
              },
              "code": {
                "type": "string"
              },
              "image": {
                "type": "string",
                "format": "uri"
              },
              "name": {
                "type": "string"
              },
              "name_tc": {
                "type": "string"
              },
              "name_sc": {
                "type": "string"
              },
              "name_en": {
                "type": "string"
              },
              "description": {
                "type": "string"
              },
              "description_tc": {
                "type": "string"
              },
              "description_sc": {
                "type": "string"
              },
              "description_en": {
                "type": "string"
              },
              "limit": {
                "type": "string"
              },
              "limit_tc": {
                "type": "string"
              },
              "limit_sc": {
                "type": "string"
              },
              "limit_en": {
                "type": "string"
              },
              "weight": {
                "type": "string"
              },
              "max_quota": {
                "type": "string"
              },
              "item_group_id": {
                "type": "string"
              },
              "replace": {
                "type": "boolean"
              }
            },
            "required": [
              "id",
              "code",
              "image",
              "name",
              "name_tc",
              "name_sc",
              "name_en",
              "description",
              "description_tc",
              "description_sc",
              "description_en",
              "limit",
              "limit_tc",
              "limit_sc",
              "limit_en",
              "weight",
              "max_quota",
              "item_group_id",
              "replace"
            ]
          }
        }
      },
      "required": [
        "category",
        "items"
      ]
    }
  },
  "required": [
    "healthCare",
    "stationary",
    "snack",
    "infantArticle",
    "others"
  ]
}
