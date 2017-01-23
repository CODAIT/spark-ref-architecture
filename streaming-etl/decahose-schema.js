{
  "type" : "struct",
  "fields" : [ {
    "name" : "actor",
    "type" : {
      "type" : "struct",
      "fields" : [ {
        "name" : "displayName",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "favoritesCount",
        "type" : "long",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "followersCount",
        "type" : "long",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "friendsCount",
        "type" : "long",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "id",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "image",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "languages",
        "type" : {
          "type" : "array",
          "elementType" : "string",
          "containsNull" : true
        },
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "link",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "links",
        "type" : {
          "type" : "array",
          "elementType" : {
            "type" : "struct",
            "fields" : [ {
              "name" : "href",
              "type" : "string",
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "rel",
              "type" : "string",
              "nullable" : true,
              "metadata" : { }
            } ]
          },
          "containsNull" : true
        },
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "listedCount",
        "type" : "long",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "location",
        "type" : {
          "type" : "struct",
          "fields" : [ {
            "name" : "displayName",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "objectType",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          } ]
        },
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "objectType",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "postedTime",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "preferredUsername",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "statusesCount",
        "type" : "long",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "summary",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "twitterTimeZone",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "utcOffset",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "verified",
        "type" : "boolean",
        "nullable" : true,
        "metadata" : { }
      } ]
    },
    "nullable" : true,
    "metadata" : { }
  }, {
    "name" : "body",
    "type" : "string",
    "nullable" : true,
    "metadata" : { }
  }, {
    "name" : "favoritesCount",
    "type" : "long",
    "nullable" : true,
    "metadata" : { }
  }, {
    "name" : "generator",
    "type" : {
      "type" : "struct",
      "fields" : [ {
        "name" : "displayName",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "link",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      } ]
    },
    "nullable" : true,
    "metadata" : { }
  }, {
    "name" : "geo",
    "type" : {
      "type" : "struct",
      "fields" : [ {
        "name" : "coordinates",
        "type" : {
          "type" : "array",
          "elementType" : "double",
          "containsNull" : true
        },
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "type",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      } ]
    },
    "nullable" : true,
    "metadata" : { }
  }, {
    "name" : "gnip",
    "type" : {
      "type" : "struct",
      "fields" : [ {
        "name" : "klout_score",
        "type" : "long",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "language",
        "type" : {
          "type" : "struct",
          "fields" : [ {
            "name" : "value",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          } ]
        },
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "profileLocations",
        "type" : {
          "type" : "array",
          "elementType" : {
            "type" : "struct",
            "fields" : [ {
              "name" : "address",
              "type" : {
                "type" : "struct",
                "fields" : [ {
                  "name" : "country",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "countryCode",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "locality",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "region",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "subRegion",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                } ]
              },
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "displayName",
              "type" : "string",
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "geo",
              "type" : {
                "type" : "struct",
                "fields" : [ {
                  "name" : "coordinates",
                  "type" : {
                    "type" : "array",
                    "elementType" : "double",
                    "containsNull" : true
                  },
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "type",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                } ]
              },
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "objectType",
              "type" : "string",
              "nullable" : true,
              "metadata" : { }
            } ]
          },
          "containsNull" : true
        },
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "urls",
        "type" : {
          "type" : "array",
          "elementType" : {
            "type" : "struct",
            "fields" : [ {
              "name" : "expanded_status",
              "type" : "long",
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "expanded_url",
              "type" : "string",
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "url",
              "type" : "string",
              "nullable" : true,
              "metadata" : { }
            } ]
          },
          "containsNull" : true
        },
        "nullable" : true,
        "metadata" : { }
      } ]
    },
    "nullable" : true,
    "metadata" : { }
  }, {
    "name" : "id",
    "type" : "string",
    "nullable" : true,
    "metadata" : { }
  }, {
    "name" : "inReplyTo",
    "type" : {
      "type" : "struct",
      "fields" : [ {
        "name" : "link",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      } ]
    },
    "nullable" : true,
    "metadata" : { }
  }, {
    "name" : "link",
    "type" : "string",
    "nullable" : true,
    "metadata" : { }
  }, {
    "name" : "location",
    "type" : {
      "type" : "struct",
      "fields" : [ {
        "name" : "country_code",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "displayName",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "geo",
        "type" : {
          "type" : "struct",
          "fields" : [ {
            "name" : "coordinates",
            "type" : {
              "type" : "array",
              "elementType" : {
                "type" : "array",
                "elementType" : {
                  "type" : "array",
                  "elementType" : "double",
                  "containsNull" : true
                },
                "containsNull" : true
              },
              "containsNull" : true
            },
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "type",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          } ]
        },
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "link",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "name",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "objectType",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "twitter_country_code",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "twitter_place_type",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      } ]
    },
    "nullable" : true,
    "metadata" : { }
  }, {
    "name" : "object",
    "type" : {
      "type" : "struct",
      "fields" : [ {
        "name" : "actor",
        "type" : {
          "type" : "struct",
          "fields" : [ {
            "name" : "displayName",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "favoritesCount",
            "type" : "long",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "followersCount",
            "type" : "long",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "friendsCount",
            "type" : "long",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "id",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "image",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "languages",
            "type" : {
              "type" : "array",
              "elementType" : "string",
              "containsNull" : true
            },
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "link",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "links",
            "type" : {
              "type" : "array",
              "elementType" : {
                "type" : "struct",
                "fields" : [ {
                  "name" : "href",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "rel",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                } ]
              },
              "containsNull" : true
            },
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "listedCount",
            "type" : "long",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "location",
            "type" : {
              "type" : "struct",
              "fields" : [ {
                "name" : "displayName",
                "type" : "string",
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "objectType",
                "type" : "string",
                "nullable" : true,
                "metadata" : { }
              } ]
            },
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "objectType",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "postedTime",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "preferredUsername",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "statusesCount",
            "type" : "long",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "summary",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "twitterTimeZone",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "utcOffset",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "verified",
            "type" : "boolean",
            "nullable" : true,
            "metadata" : { }
          } ]
        },
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "body",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "favoritesCount",
        "type" : "long",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "generator",
        "type" : {
          "type" : "struct",
          "fields" : [ {
            "name" : "displayName",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "link",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          } ]
        },
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "geo",
        "type" : {
          "type" : "struct",
          "fields" : [ {
            "name" : "coordinates",
            "type" : {
              "type" : "array",
              "elementType" : "double",
              "containsNull" : true
            },
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "type",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          } ]
        },
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "id",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "inReplyTo",
        "type" : {
          "type" : "struct",
          "fields" : [ {
            "name" : "link",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          } ]
        },
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "link",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "location",
        "type" : {
          "type" : "struct",
          "fields" : [ {
            "name" : "country_code",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "displayName",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "geo",
            "type" : {
              "type" : "struct",
              "fields" : [ {
                "name" : "coordinates",
                "type" : {
                  "type" : "array",
                  "elementType" : {
                    "type" : "array",
                    "elementType" : {
                      "type" : "array",
                      "elementType" : "double",
                      "containsNull" : true
                    },
                    "containsNull" : true
                  },
                  "containsNull" : true
                },
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "type",
                "type" : "string",
                "nullable" : true,
                "metadata" : { }
              } ]
            },
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "link",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "name",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "objectType",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "twitter_country_code",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "twitter_place_type",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          } ]
        },
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "object",
        "type" : {
          "type" : "struct",
          "fields" : [ {
            "name" : "id",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "link",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "objectType",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "postedTime",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "summary",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          } ]
        },
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "objectType",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "postedTime",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "provider",
        "type" : {
          "type" : "struct",
          "fields" : [ {
            "name" : "displayName",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "link",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "objectType",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          } ]
        },
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "summary",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "twitter_entities",
        "type" : {
          "type" : "struct",
          "fields" : [ {
            "name" : "hashtags",
            "type" : {
              "type" : "array",
              "elementType" : {
                "type" : "struct",
                "fields" : [ {
                  "name" : "indices",
                  "type" : {
                    "type" : "array",
                    "elementType" : "long",
                    "containsNull" : true
                  },
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "text",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                } ]
              },
              "containsNull" : true
            },
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "media",
            "type" : {
              "type" : "array",
              "elementType" : {
                "type" : "struct",
                "fields" : [ {
                  "name" : "display_url",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "expanded_url",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "id",
                  "type" : "long",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "id_str",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "indices",
                  "type" : {
                    "type" : "array",
                    "elementType" : "long",
                    "containsNull" : true
                  },
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "media_url",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "media_url_https",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "sizes",
                  "type" : {
                    "type" : "struct",
                    "fields" : [ {
                      "name" : "large",
                      "type" : {
                        "type" : "struct",
                        "fields" : [ {
                          "name" : "h",
                          "type" : "long",
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "resize",
                          "type" : "string",
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "w",
                          "type" : "long",
                          "nullable" : true,
                          "metadata" : { }
                        } ]
                      },
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "medium",
                      "type" : {
                        "type" : "struct",
                        "fields" : [ {
                          "name" : "h",
                          "type" : "long",
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "resize",
                          "type" : "string",
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "w",
                          "type" : "long",
                          "nullable" : true,
                          "metadata" : { }
                        } ]
                      },
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "small",
                      "type" : {
                        "type" : "struct",
                        "fields" : [ {
                          "name" : "h",
                          "type" : "long",
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "resize",
                          "type" : "string",
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "w",
                          "type" : "long",
                          "nullable" : true,
                          "metadata" : { }
                        } ]
                      },
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "thumb",
                      "type" : {
                        "type" : "struct",
                        "fields" : [ {
                          "name" : "h",
                          "type" : "long",
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "resize",
                          "type" : "string",
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "w",
                          "type" : "long",
                          "nullable" : true,
                          "metadata" : { }
                        } ]
                      },
                      "nullable" : true,
                      "metadata" : { }
                    } ]
                  },
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "source_status_id",
                  "type" : "long",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "source_status_id_str",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "source_user_id",
                  "type" : "long",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "source_user_id_str",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "type",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "url",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                } ]
              },
              "containsNull" : true
            },
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "symbols",
            "type" : {
              "type" : "array",
              "elementType" : {
                "type" : "struct",
                "fields" : [ {
                  "name" : "indices",
                  "type" : {
                    "type" : "array",
                    "elementType" : "long",
                    "containsNull" : true
                  },
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "text",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                } ]
              },
              "containsNull" : true
            },
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "urls",
            "type" : {
              "type" : "array",
              "elementType" : {
                "type" : "struct",
                "fields" : [ {
                  "name" : "display_url",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "expanded_url",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "indices",
                  "type" : {
                    "type" : "array",
                    "elementType" : "long",
                    "containsNull" : true
                  },
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "url",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                } ]
              },
              "containsNull" : true
            },
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "user_mentions",
            "type" : {
              "type" : "array",
              "elementType" : {
                "type" : "struct",
                "fields" : [ {
                  "name" : "id",
                  "type" : "long",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "id_str",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "indices",
                  "type" : {
                    "type" : "array",
                    "elementType" : "long",
                    "containsNull" : true
                  },
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "name",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "screen_name",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                } ]
              },
              "containsNull" : true
            },
            "nullable" : true,
            "metadata" : { }
          } ]
        },
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "twitter_extended_entities",
        "type" : {
          "type" : "struct",
          "fields" : [ {
            "name" : "media",
            "type" : {
              "type" : "array",
              "elementType" : {
                "type" : "struct",
                "fields" : [ {
                  "name" : "display_url",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "expanded_url",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "id",
                  "type" : "long",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "id_str",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "indices",
                  "type" : {
                    "type" : "array",
                    "elementType" : "long",
                    "containsNull" : true
                  },
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "media_url",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "media_url_https",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "sizes",
                  "type" : {
                    "type" : "struct",
                    "fields" : [ {
                      "name" : "large",
                      "type" : {
                        "type" : "struct",
                        "fields" : [ {
                          "name" : "h",
                          "type" : "long",
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "resize",
                          "type" : "string",
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "w",
                          "type" : "long",
                          "nullable" : true,
                          "metadata" : { }
                        } ]
                      },
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "medium",
                      "type" : {
                        "type" : "struct",
                        "fields" : [ {
                          "name" : "h",
                          "type" : "long",
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "resize",
                          "type" : "string",
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "w",
                          "type" : "long",
                          "nullable" : true,
                          "metadata" : { }
                        } ]
                      },
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "small",
                      "type" : {
                        "type" : "struct",
                        "fields" : [ {
                          "name" : "h",
                          "type" : "long",
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "resize",
                          "type" : "string",
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "w",
                          "type" : "long",
                          "nullable" : true,
                          "metadata" : { }
                        } ]
                      },
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "thumb",
                      "type" : {
                        "type" : "struct",
                        "fields" : [ {
                          "name" : "h",
                          "type" : "long",
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "resize",
                          "type" : "string",
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "w",
                          "type" : "long",
                          "nullable" : true,
                          "metadata" : { }
                        } ]
                      },
                      "nullable" : true,
                      "metadata" : { }
                    } ]
                  },
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "source_status_id",
                  "type" : "long",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "source_status_id_str",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "source_user_id",
                  "type" : "long",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "source_user_id_str",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "type",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "url",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "video_info",
                  "type" : {
                    "type" : "struct",
                    "fields" : [ {
                      "name" : "aspect_ratio",
                      "type" : {
                        "type" : "array",
                        "elementType" : "long",
                        "containsNull" : true
                      },
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "duration_millis",
                      "type" : "long",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "variants",
                      "type" : {
                        "type" : "array",
                        "elementType" : {
                          "type" : "struct",
                          "fields" : [ {
                            "name" : "bitrate",
                            "type" : "long",
                            "nullable" : true,
                            "metadata" : { }
                          }, {
                            "name" : "content_type",
                            "type" : "string",
                            "nullable" : true,
                            "metadata" : { }
                          }, {
                            "name" : "url",
                            "type" : "string",
                            "nullable" : true,
                            "metadata" : { }
                          } ]
                        },
                        "containsNull" : true
                      },
                      "nullable" : true,
                      "metadata" : { }
                    } ]
                  },
                  "nullable" : true,
                  "metadata" : { }
                } ]
              },
              "containsNull" : true
            },
            "nullable" : true,
            "metadata" : { }
          } ]
        },
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "twitter_filter_level",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "twitter_lang",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "twitter_quoted_status",
        "type" : {
          "type" : "struct",
          "fields" : [ {
            "name" : "actor",
            "type" : {
              "type" : "struct",
              "fields" : [ {
                "name" : "displayName",
                "type" : "string",
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "favoritesCount",
                "type" : "long",
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "followersCount",
                "type" : "long",
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "friendsCount",
                "type" : "long",
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "id",
                "type" : "string",
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "image",
                "type" : "string",
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "languages",
                "type" : {
                  "type" : "array",
                  "elementType" : "string",
                  "containsNull" : true
                },
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "link",
                "type" : "string",
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "links",
                "type" : {
                  "type" : "array",
                  "elementType" : {
                    "type" : "struct",
                    "fields" : [ {
                      "name" : "href",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "rel",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    } ]
                  },
                  "containsNull" : true
                },
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "listedCount",
                "type" : "long",
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "location",
                "type" : {
                  "type" : "struct",
                  "fields" : [ {
                    "name" : "displayName",
                    "type" : "string",
                    "nullable" : true,
                    "metadata" : { }
                  }, {
                    "name" : "objectType",
                    "type" : "string",
                    "nullable" : true,
                    "metadata" : { }
                  } ]
                },
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "objectType",
                "type" : "string",
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "postedTime",
                "type" : "string",
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "preferredUsername",
                "type" : "string",
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "statusesCount",
                "type" : "long",
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "summary",
                "type" : "string",
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "twitterTimeZone",
                "type" : "string",
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "utcOffset",
                "type" : "string",
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "verified",
                "type" : "boolean",
                "nullable" : true,
                "metadata" : { }
              } ]
            },
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "body",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "favoritesCount",
            "type" : "long",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "generator",
            "type" : {
              "type" : "struct",
              "fields" : [ {
                "name" : "displayName",
                "type" : "string",
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "link",
                "type" : "string",
                "nullable" : true,
                "metadata" : { }
              } ]
            },
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "geo",
            "type" : {
              "type" : "struct",
              "fields" : [ {
                "name" : "coordinates",
                "type" : {
                  "type" : "array",
                  "elementType" : "double",
                  "containsNull" : true
                },
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "type",
                "type" : "string",
                "nullable" : true,
                "metadata" : { }
              } ]
            },
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "id",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "inReplyTo",
            "type" : {
              "type" : "struct",
              "fields" : [ {
                "name" : "link",
                "type" : "string",
                "nullable" : true,
                "metadata" : { }
              } ]
            },
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "link",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "location",
            "type" : {
              "type" : "struct",
              "fields" : [ {
                "name" : "country_code",
                "type" : "string",
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "displayName",
                "type" : "string",
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "geo",
                "type" : {
                  "type" : "struct",
                  "fields" : [ {
                    "name" : "coordinates",
                    "type" : {
                      "type" : "array",
                      "elementType" : {
                        "type" : "array",
                        "elementType" : {
                          "type" : "array",
                          "elementType" : "double",
                          "containsNull" : true
                        },
                        "containsNull" : true
                      },
                      "containsNull" : true
                    },
                    "nullable" : true,
                    "metadata" : { }
                  }, {
                    "name" : "type",
                    "type" : "string",
                    "nullable" : true,
                    "metadata" : { }
                  } ]
                },
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "link",
                "type" : "string",
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "name",
                "type" : "string",
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "objectType",
                "type" : "string",
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "twitter_country_code",
                "type" : "string",
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "twitter_place_type",
                "type" : "string",
                "nullable" : true,
                "metadata" : { }
              } ]
            },
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "object",
            "type" : {
              "type" : "struct",
              "fields" : [ {
                "name" : "id",
                "type" : "string",
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "link",
                "type" : "string",
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "objectType",
                "type" : "string",
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "postedTime",
                "type" : "string",
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "summary",
                "type" : "string",
                "nullable" : true,
                "metadata" : { }
              } ]
            },
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "objectType",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "postedTime",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "provider",
            "type" : {
              "type" : "struct",
              "fields" : [ {
                "name" : "displayName",
                "type" : "string",
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "link",
                "type" : "string",
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "objectType",
                "type" : "string",
                "nullable" : true,
                "metadata" : { }
              } ]
            },
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "twitter_entities",
            "type" : {
              "type" : "struct",
              "fields" : [ {
                "name" : "hashtags",
                "type" : {
                  "type" : "array",
                  "elementType" : {
                    "type" : "struct",
                    "fields" : [ {
                      "name" : "indices",
                      "type" : {
                        "type" : "array",
                        "elementType" : "long",
                        "containsNull" : true
                      },
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "text",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    } ]
                  },
                  "containsNull" : true
                },
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "media",
                "type" : {
                  "type" : "array",
                  "elementType" : {
                    "type" : "struct",
                    "fields" : [ {
                      "name" : "display_url",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "expanded_url",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "id",
                      "type" : "long",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "id_str",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "indices",
                      "type" : {
                        "type" : "array",
                        "elementType" : "long",
                        "containsNull" : true
                      },
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "media_url",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "media_url_https",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "sizes",
                      "type" : {
                        "type" : "struct",
                        "fields" : [ {
                          "name" : "large",
                          "type" : {
                            "type" : "struct",
                            "fields" : [ {
                              "name" : "h",
                              "type" : "long",
                              "nullable" : true,
                              "metadata" : { }
                            }, {
                              "name" : "resize",
                              "type" : "string",
                              "nullable" : true,
                              "metadata" : { }
                            }, {
                              "name" : "w",
                              "type" : "long",
                              "nullable" : true,
                              "metadata" : { }
                            } ]
                          },
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "medium",
                          "type" : {
                            "type" : "struct",
                            "fields" : [ {
                              "name" : "h",
                              "type" : "long",
                              "nullable" : true,
                              "metadata" : { }
                            }, {
                              "name" : "resize",
                              "type" : "string",
                              "nullable" : true,
                              "metadata" : { }
                            }, {
                              "name" : "w",
                              "type" : "long",
                              "nullable" : true,
                              "metadata" : { }
                            } ]
                          },
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "small",
                          "type" : {
                            "type" : "struct",
                            "fields" : [ {
                              "name" : "h",
                              "type" : "long",
                              "nullable" : true,
                              "metadata" : { }
                            }, {
                              "name" : "resize",
                              "type" : "string",
                              "nullable" : true,
                              "metadata" : { }
                            }, {
                              "name" : "w",
                              "type" : "long",
                              "nullable" : true,
                              "metadata" : { }
                            } ]
                          },
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "thumb",
                          "type" : {
                            "type" : "struct",
                            "fields" : [ {
                              "name" : "h",
                              "type" : "long",
                              "nullable" : true,
                              "metadata" : { }
                            }, {
                              "name" : "resize",
                              "type" : "string",
                              "nullable" : true,
                              "metadata" : { }
                            }, {
                              "name" : "w",
                              "type" : "long",
                              "nullable" : true,
                              "metadata" : { }
                            } ]
                          },
                          "nullable" : true,
                          "metadata" : { }
                        } ]
                      },
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "source_status_id",
                      "type" : "long",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "source_status_id_str",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "source_user_id",
                      "type" : "long",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "source_user_id_str",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "type",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "url",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    } ]
                  },
                  "containsNull" : true
                },
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "symbols",
                "type" : {
                  "type" : "array",
                  "elementType" : {
                    "type" : "struct",
                    "fields" : [ {
                      "name" : "indices",
                      "type" : {
                        "type" : "array",
                        "elementType" : "long",
                        "containsNull" : true
                      },
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "text",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    } ]
                  },
                  "containsNull" : true
                },
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "urls",
                "type" : {
                  "type" : "array",
                  "elementType" : {
                    "type" : "struct",
                    "fields" : [ {
                      "name" : "display_url",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "expanded_url",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "indices",
                      "type" : {
                        "type" : "array",
                        "elementType" : "long",
                        "containsNull" : true
                      },
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "url",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    } ]
                  },
                  "containsNull" : true
                },
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "user_mentions",
                "type" : {
                  "type" : "array",
                  "elementType" : {
                    "type" : "struct",
                    "fields" : [ {
                      "name" : "id",
                      "type" : "long",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "id_str",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "indices",
                      "type" : {
                        "type" : "array",
                        "elementType" : "long",
                        "containsNull" : true
                      },
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "name",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "screen_name",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    } ]
                  },
                  "containsNull" : true
                },
                "nullable" : true,
                "metadata" : { }
              } ]
            },
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "twitter_extended_entities",
            "type" : {
              "type" : "struct",
              "fields" : [ {
                "name" : "media",
                "type" : {
                  "type" : "array",
                  "elementType" : {
                    "type" : "struct",
                    "fields" : [ {
                      "name" : "display_url",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "expanded_url",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "id",
                      "type" : "long",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "id_str",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "indices",
                      "type" : {
                        "type" : "array",
                        "elementType" : "long",
                        "containsNull" : true
                      },
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "media_url",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "media_url_https",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "sizes",
                      "type" : {
                        "type" : "struct",
                        "fields" : [ {
                          "name" : "large",
                          "type" : {
                            "type" : "struct",
                            "fields" : [ {
                              "name" : "h",
                              "type" : "long",
                              "nullable" : true,
                              "metadata" : { }
                            }, {
                              "name" : "resize",
                              "type" : "string",
                              "nullable" : true,
                              "metadata" : { }
                            }, {
                              "name" : "w",
                              "type" : "long",
                              "nullable" : true,
                              "metadata" : { }
                            } ]
                          },
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "medium",
                          "type" : {
                            "type" : "struct",
                            "fields" : [ {
                              "name" : "h",
                              "type" : "long",
                              "nullable" : true,
                              "metadata" : { }
                            }, {
                              "name" : "resize",
                              "type" : "string",
                              "nullable" : true,
                              "metadata" : { }
                            }, {
                              "name" : "w",
                              "type" : "long",
                              "nullable" : true,
                              "metadata" : { }
                            } ]
                          },
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "small",
                          "type" : {
                            "type" : "struct",
                            "fields" : [ {
                              "name" : "h",
                              "type" : "long",
                              "nullable" : true,
                              "metadata" : { }
                            }, {
                              "name" : "resize",
                              "type" : "string",
                              "nullable" : true,
                              "metadata" : { }
                            }, {
                              "name" : "w",
                              "type" : "long",
                              "nullable" : true,
                              "metadata" : { }
                            } ]
                          },
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "thumb",
                          "type" : {
                            "type" : "struct",
                            "fields" : [ {
                              "name" : "h",
                              "type" : "long",
                              "nullable" : true,
                              "metadata" : { }
                            }, {
                              "name" : "resize",
                              "type" : "string",
                              "nullable" : true,
                              "metadata" : { }
                            }, {
                              "name" : "w",
                              "type" : "long",
                              "nullable" : true,
                              "metadata" : { }
                            } ]
                          },
                          "nullable" : true,
                          "metadata" : { }
                        } ]
                      },
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "source_status_id",
                      "type" : "long",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "source_status_id_str",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "source_user_id",
                      "type" : "long",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "source_user_id_str",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "type",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "url",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "video_info",
                      "type" : {
                        "type" : "struct",
                        "fields" : [ {
                          "name" : "aspect_ratio",
                          "type" : {
                            "type" : "array",
                            "elementType" : "long",
                            "containsNull" : true
                          },
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "duration_millis",
                          "type" : "long",
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "variants",
                          "type" : {
                            "type" : "array",
                            "elementType" : {
                              "type" : "struct",
                              "fields" : [ {
                                "name" : "bitrate",
                                "type" : "long",
                                "nullable" : true,
                                "metadata" : { }
                              }, {
                                "name" : "content_type",
                                "type" : "string",
                                "nullable" : true,
                                "metadata" : { }
                              }, {
                                "name" : "url",
                                "type" : "string",
                                "nullable" : true,
                                "metadata" : { }
                              } ]
                            },
                            "containsNull" : true
                          },
                          "nullable" : true,
                          "metadata" : { }
                        } ]
                      },
                      "nullable" : true,
                      "metadata" : { }
                    } ]
                  },
                  "containsNull" : true
                },
                "nullable" : true,
                "metadata" : { }
              } ]
            },
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "twitter_filter_level",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "twitter_lang",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "verb",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "withheld_in_countries",
            "type" : {
              "type" : "array",
              "elementType" : "string",
              "containsNull" : true
            },
            "nullable" : true,
            "metadata" : { }
          } ]
        },
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "verb",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "withheld_in_countries",
        "type" : {
          "type" : "array",
          "elementType" : "string",
          "containsNull" : true
        },
        "nullable" : true,
        "metadata" : { }
      } ]
    },
    "nullable" : true,
    "metadata" : { }
  }, {
    "name" : "objectType",
    "type" : "string",
    "nullable" : true,
    "metadata" : { }
  }, {
    "name" : "postedTime",
    "type" : "string",
    "nullable" : true,
    "metadata" : { }
  }, {
    "name" : "provider",
    "type" : {
      "type" : "struct",
      "fields" : [ {
        "name" : "displayName",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "link",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "objectType",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      } ]
    },
    "nullable" : true,
    "metadata" : { }
  }, {
    "name" : "retweetCount",
    "type" : "long",
    "nullable" : true,
    "metadata" : { }
  }, {
    "name" : "target",
    "type" : {
      "type" : "struct",
      "fields" : [ {
        "name" : "up_to_id",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      } ]
    },
    "nullable" : true,
    "metadata" : { }
  }, {
    "name" : "timestampMs",
    "type" : "string",
    "nullable" : true,
    "metadata" : { }
  }, {
    "name" : "twitter_entities",
    "type" : {
      "type" : "struct",
      "fields" : [ {
        "name" : "hashtags",
        "type" : {
          "type" : "array",
          "elementType" : {
            "type" : "struct",
            "fields" : [ {
              "name" : "indices",
              "type" : {
                "type" : "array",
                "elementType" : "long",
                "containsNull" : true
              },
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "text",
              "type" : "string",
              "nullable" : true,
              "metadata" : { }
            } ]
          },
          "containsNull" : true
        },
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "media",
        "type" : {
          "type" : "array",
          "elementType" : {
            "type" : "struct",
            "fields" : [ {
              "name" : "display_url",
              "type" : "string",
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "expanded_url",
              "type" : "string",
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "id",
              "type" : "long",
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "id_str",
              "type" : "string",
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "indices",
              "type" : {
                "type" : "array",
                "elementType" : "long",
                "containsNull" : true
              },
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "media_url",
              "type" : "string",
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "media_url_https",
              "type" : "string",
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "sizes",
              "type" : {
                "type" : "struct",
                "fields" : [ {
                  "name" : "large",
                  "type" : {
                    "type" : "struct",
                    "fields" : [ {
                      "name" : "h",
                      "type" : "long",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "resize",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "w",
                      "type" : "long",
                      "nullable" : true,
                      "metadata" : { }
                    } ]
                  },
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "medium",
                  "type" : {
                    "type" : "struct",
                    "fields" : [ {
                      "name" : "h",
                      "type" : "long",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "resize",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "w",
                      "type" : "long",
                      "nullable" : true,
                      "metadata" : { }
                    } ]
                  },
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "small",
                  "type" : {
                    "type" : "struct",
                    "fields" : [ {
                      "name" : "h",
                      "type" : "long",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "resize",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "w",
                      "type" : "long",
                      "nullable" : true,
                      "metadata" : { }
                    } ]
                  },
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "thumb",
                  "type" : {
                    "type" : "struct",
                    "fields" : [ {
                      "name" : "h",
                      "type" : "long",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "resize",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "w",
                      "type" : "long",
                      "nullable" : true,
                      "metadata" : { }
                    } ]
                  },
                  "nullable" : true,
                  "metadata" : { }
                } ]
              },
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "source_status_id",
              "type" : "long",
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "source_status_id_str",
              "type" : "string",
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "source_user_id",
              "type" : "long",
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "source_user_id_str",
              "type" : "string",
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "type",
              "type" : "string",
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "url",
              "type" : "string",
              "nullable" : true,
              "metadata" : { }
            } ]
          },
          "containsNull" : true
        },
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "symbols",
        "type" : {
          "type" : "array",
          "elementType" : {
            "type" : "struct",
            "fields" : [ {
              "name" : "indices",
              "type" : {
                "type" : "array",
                "elementType" : "long",
                "containsNull" : true
              },
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "text",
              "type" : "string",
              "nullable" : true,
              "metadata" : { }
            } ]
          },
          "containsNull" : true
        },
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "urls",
        "type" : {
          "type" : "array",
          "elementType" : {
            "type" : "struct",
            "fields" : [ {
              "name" : "display_url",
              "type" : "string",
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "expanded_url",
              "type" : "string",
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "indices",
              "type" : {
                "type" : "array",
                "elementType" : "long",
                "containsNull" : true
              },
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "url",
              "type" : "string",
              "nullable" : true,
              "metadata" : { }
            } ]
          },
          "containsNull" : true
        },
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "user_mentions",
        "type" : {
          "type" : "array",
          "elementType" : {
            "type" : "struct",
            "fields" : [ {
              "name" : "id",
              "type" : "long",
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "id_str",
              "type" : "string",
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "indices",
              "type" : {
                "type" : "array",
                "elementType" : "long",
                "containsNull" : true
              },
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "name",
              "type" : "string",
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "screen_name",
              "type" : "string",
              "nullable" : true,
              "metadata" : { }
            } ]
          },
          "containsNull" : true
        },
        "nullable" : true,
        "metadata" : { }
      } ]
    },
    "nullable" : true,
    "metadata" : { }
  }, {
    "name" : "twitter_extended_entities",
    "type" : {
      "type" : "struct",
      "fields" : [ {
        "name" : "media",
        "type" : {
          "type" : "array",
          "elementType" : {
            "type" : "struct",
            "fields" : [ {
              "name" : "display_url",
              "type" : "string",
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "expanded_url",
              "type" : "string",
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "id",
              "type" : "long",
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "id_str",
              "type" : "string",
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "indices",
              "type" : {
                "type" : "array",
                "elementType" : "long",
                "containsNull" : true
              },
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "media_url",
              "type" : "string",
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "media_url_https",
              "type" : "string",
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "sizes",
              "type" : {
                "type" : "struct",
                "fields" : [ {
                  "name" : "large",
                  "type" : {
                    "type" : "struct",
                    "fields" : [ {
                      "name" : "h",
                      "type" : "long",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "resize",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "w",
                      "type" : "long",
                      "nullable" : true,
                      "metadata" : { }
                    } ]
                  },
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "medium",
                  "type" : {
                    "type" : "struct",
                    "fields" : [ {
                      "name" : "h",
                      "type" : "long",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "resize",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "w",
                      "type" : "long",
                      "nullable" : true,
                      "metadata" : { }
                    } ]
                  },
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "small",
                  "type" : {
                    "type" : "struct",
                    "fields" : [ {
                      "name" : "h",
                      "type" : "long",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "resize",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "w",
                      "type" : "long",
                      "nullable" : true,
                      "metadata" : { }
                    } ]
                  },
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "thumb",
                  "type" : {
                    "type" : "struct",
                    "fields" : [ {
                      "name" : "h",
                      "type" : "long",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "resize",
                      "type" : "string",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "w",
                      "type" : "long",
                      "nullable" : true,
                      "metadata" : { }
                    } ]
                  },
                  "nullable" : true,
                  "metadata" : { }
                } ]
              },
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "source_status_id",
              "type" : "long",
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "source_status_id_str",
              "type" : "string",
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "source_user_id",
              "type" : "long",
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "source_user_id_str",
              "type" : "string",
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "type",
              "type" : "string",
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "url",
              "type" : "string",
              "nullable" : true,
              "metadata" : { }
            }, {
              "name" : "video_info",
              "type" : {
                "type" : "struct",
                "fields" : [ {
                  "name" : "aspect_ratio",
                  "type" : {
                    "type" : "array",
                    "elementType" : "long",
                    "containsNull" : true
                  },
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "duration_millis",
                  "type" : "long",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "variants",
                  "type" : {
                    "type" : "array",
                    "elementType" : {
                      "type" : "struct",
                      "fields" : [ {
                        "name" : "bitrate",
                        "type" : "long",
                        "nullable" : true,
                        "metadata" : { }
                      }, {
                        "name" : "content_type",
                        "type" : "string",
                        "nullable" : true,
                        "metadata" : { }
                      }, {
                        "name" : "url",
                        "type" : "string",
                        "nullable" : true,
                        "metadata" : { }
                      } ]
                    },
                    "containsNull" : true
                  },
                  "nullable" : true,
                  "metadata" : { }
                } ]
              },
              "nullable" : true,
              "metadata" : { }
            } ]
          },
          "containsNull" : true
        },
        "nullable" : true,
        "metadata" : { }
      } ]
    },
    "nullable" : true,
    "metadata" : { }
  }, {
    "name" : "twitter_filter_level",
    "type" : "string",
    "nullable" : true,
    "metadata" : { }
  }, {
    "name" : "twitter_lang",
    "type" : "string",
    "nullable" : true,
    "metadata" : { }
  }, {
    "name" : "twitter_quoted_status",
    "type" : {
      "type" : "struct",
      "fields" : [ {
        "name" : "actor",
        "type" : {
          "type" : "struct",
          "fields" : [ {
            "name" : "displayName",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "favoritesCount",
            "type" : "long",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "followersCount",
            "type" : "long",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "friendsCount",
            "type" : "long",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "id",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "image",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "languages",
            "type" : {
              "type" : "array",
              "elementType" : "string",
              "containsNull" : true
            },
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "link",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "links",
            "type" : {
              "type" : "array",
              "elementType" : {
                "type" : "struct",
                "fields" : [ {
                  "name" : "href",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "rel",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                } ]
              },
              "containsNull" : true
            },
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "listedCount",
            "type" : "long",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "location",
            "type" : {
              "type" : "struct",
              "fields" : [ {
                "name" : "displayName",
                "type" : "string",
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "objectType",
                "type" : "string",
                "nullable" : true,
                "metadata" : { }
              } ]
            },
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "objectType",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "postedTime",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "preferredUsername",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "statusesCount",
            "type" : "long",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "summary",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "twitterTimeZone",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "utcOffset",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "verified",
            "type" : "boolean",
            "nullable" : true,
            "metadata" : { }
          } ]
        },
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "body",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "favoritesCount",
        "type" : "long",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "generator",
        "type" : {
          "type" : "struct",
          "fields" : [ {
            "name" : "displayName",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "link",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          } ]
        },
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "geo",
        "type" : {
          "type" : "struct",
          "fields" : [ {
            "name" : "coordinates",
            "type" : {
              "type" : "array",
              "elementType" : "double",
              "containsNull" : true
            },
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "type",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          } ]
        },
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "id",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "inReplyTo",
        "type" : {
          "type" : "struct",
          "fields" : [ {
            "name" : "link",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          } ]
        },
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "link",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "location",
        "type" : {
          "type" : "struct",
          "fields" : [ {
            "name" : "country_code",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "displayName",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "geo",
            "type" : {
              "type" : "struct",
              "fields" : [ {
                "name" : "coordinates",
                "type" : {
                  "type" : "array",
                  "elementType" : {
                    "type" : "array",
                    "elementType" : {
                      "type" : "array",
                      "elementType" : "double",
                      "containsNull" : true
                    },
                    "containsNull" : true
                  },
                  "containsNull" : true
                },
                "nullable" : true,
                "metadata" : { }
              }, {
                "name" : "type",
                "type" : "string",
                "nullable" : true,
                "metadata" : { }
              } ]
            },
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "link",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "name",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "objectType",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "twitter_country_code",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "twitter_place_type",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          } ]
        },
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "object",
        "type" : {
          "type" : "struct",
          "fields" : [ {
            "name" : "id",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "link",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "objectType",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "postedTime",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "summary",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          } ]
        },
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "objectType",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "postedTime",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "provider",
        "type" : {
          "type" : "struct",
          "fields" : [ {
            "name" : "displayName",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "link",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "objectType",
            "type" : "string",
            "nullable" : true,
            "metadata" : { }
          } ]
        },
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "twitter_entities",
        "type" : {
          "type" : "struct",
          "fields" : [ {
            "name" : "hashtags",
            "type" : {
              "type" : "array",
              "elementType" : {
                "type" : "struct",
                "fields" : [ {
                  "name" : "indices",
                  "type" : {
                    "type" : "array",
                    "elementType" : "long",
                    "containsNull" : true
                  },
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "text",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                } ]
              },
              "containsNull" : true
            },
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "media",
            "type" : {
              "type" : "array",
              "elementType" : {
                "type" : "struct",
                "fields" : [ {
                  "name" : "display_url",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "expanded_url",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "id",
                  "type" : "long",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "id_str",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "indices",
                  "type" : {
                    "type" : "array",
                    "elementType" : "long",
                    "containsNull" : true
                  },
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "media_url",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "media_url_https",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "sizes",
                  "type" : {
                    "type" : "struct",
                    "fields" : [ {
                      "name" : "large",
                      "type" : {
                        "type" : "struct",
                        "fields" : [ {
                          "name" : "h",
                          "type" : "long",
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "resize",
                          "type" : "string",
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "w",
                          "type" : "long",
                          "nullable" : true,
                          "metadata" : { }
                        } ]
                      },
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "medium",
                      "type" : {
                        "type" : "struct",
                        "fields" : [ {
                          "name" : "h",
                          "type" : "long",
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "resize",
                          "type" : "string",
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "w",
                          "type" : "long",
                          "nullable" : true,
                          "metadata" : { }
                        } ]
                      },
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "small",
                      "type" : {
                        "type" : "struct",
                        "fields" : [ {
                          "name" : "h",
                          "type" : "long",
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "resize",
                          "type" : "string",
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "w",
                          "type" : "long",
                          "nullable" : true,
                          "metadata" : { }
                        } ]
                      },
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "thumb",
                      "type" : {
                        "type" : "struct",
                        "fields" : [ {
                          "name" : "h",
                          "type" : "long",
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "resize",
                          "type" : "string",
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "w",
                          "type" : "long",
                          "nullable" : true,
                          "metadata" : { }
                        } ]
                      },
                      "nullable" : true,
                      "metadata" : { }
                    } ]
                  },
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "source_status_id",
                  "type" : "long",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "source_status_id_str",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "source_user_id",
                  "type" : "long",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "source_user_id_str",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "type",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "url",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                } ]
              },
              "containsNull" : true
            },
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "symbols",
            "type" : {
              "type" : "array",
              "elementType" : {
                "type" : "struct",
                "fields" : [ {
                  "name" : "indices",
                  "type" : {
                    "type" : "array",
                    "elementType" : "long",
                    "containsNull" : true
                  },
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "text",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                } ]
              },
              "containsNull" : true
            },
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "urls",
            "type" : {
              "type" : "array",
              "elementType" : {
                "type" : "struct",
                "fields" : [ {
                  "name" : "display_url",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "expanded_url",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "indices",
                  "type" : {
                    "type" : "array",
                    "elementType" : "long",
                    "containsNull" : true
                  },
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "url",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                } ]
              },
              "containsNull" : true
            },
            "nullable" : true,
            "metadata" : { }
          }, {
            "name" : "user_mentions",
            "type" : {
              "type" : "array",
              "elementType" : {
                "type" : "struct",
                "fields" : [ {
                  "name" : "id",
                  "type" : "long",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "id_str",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "indices",
                  "type" : {
                    "type" : "array",
                    "elementType" : "long",
                    "containsNull" : true
                  },
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "name",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "screen_name",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                } ]
              },
              "containsNull" : true
            },
            "nullable" : true,
            "metadata" : { }
          } ]
        },
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "twitter_extended_entities",
        "type" : {
          "type" : "struct",
          "fields" : [ {
            "name" : "media",
            "type" : {
              "type" : "array",
              "elementType" : {
                "type" : "struct",
                "fields" : [ {
                  "name" : "display_url",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "expanded_url",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "id",
                  "type" : "long",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "id_str",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "indices",
                  "type" : {
                    "type" : "array",
                    "elementType" : "long",
                    "containsNull" : true
                  },
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "media_url",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "media_url_https",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "sizes",
                  "type" : {
                    "type" : "struct",
                    "fields" : [ {
                      "name" : "large",
                      "type" : {
                        "type" : "struct",
                        "fields" : [ {
                          "name" : "h",
                          "type" : "long",
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "resize",
                          "type" : "string",
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "w",
                          "type" : "long",
                          "nullable" : true,
                          "metadata" : { }
                        } ]
                      },
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "medium",
                      "type" : {
                        "type" : "struct",
                        "fields" : [ {
                          "name" : "h",
                          "type" : "long",
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "resize",
                          "type" : "string",
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "w",
                          "type" : "long",
                          "nullable" : true,
                          "metadata" : { }
                        } ]
                      },
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "small",
                      "type" : {
                        "type" : "struct",
                        "fields" : [ {
                          "name" : "h",
                          "type" : "long",
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "resize",
                          "type" : "string",
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "w",
                          "type" : "long",
                          "nullable" : true,
                          "metadata" : { }
                        } ]
                      },
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "thumb",
                      "type" : {
                        "type" : "struct",
                        "fields" : [ {
                          "name" : "h",
                          "type" : "long",
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "resize",
                          "type" : "string",
                          "nullable" : true,
                          "metadata" : { }
                        }, {
                          "name" : "w",
                          "type" : "long",
                          "nullable" : true,
                          "metadata" : { }
                        } ]
                      },
                      "nullable" : true,
                      "metadata" : { }
                    } ]
                  },
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "source_status_id",
                  "type" : "long",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "source_status_id_str",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "source_user_id",
                  "type" : "long",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "source_user_id_str",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "type",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "url",
                  "type" : "string",
                  "nullable" : true,
                  "metadata" : { }
                }, {
                  "name" : "video_info",
                  "type" : {
                    "type" : "struct",
                    "fields" : [ {
                      "name" : "aspect_ratio",
                      "type" : {
                        "type" : "array",
                        "elementType" : "long",
                        "containsNull" : true
                      },
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "duration_millis",
                      "type" : "long",
                      "nullable" : true,
                      "metadata" : { }
                    }, {
                      "name" : "variants",
                      "type" : {
                        "type" : "array",
                        "elementType" : {
                          "type" : "struct",
                          "fields" : [ {
                            "name" : "bitrate",
                            "type" : "long",
                            "nullable" : true,
                            "metadata" : { }
                          }, {
                            "name" : "content_type",
                            "type" : "string",
                            "nullable" : true,
                            "metadata" : { }
                          }, {
                            "name" : "url",
                            "type" : "string",
                            "nullable" : true,
                            "metadata" : { }
                          } ]
                        },
                        "containsNull" : true
                      },
                      "nullable" : true,
                      "metadata" : { }
                    } ]
                  },
                  "nullable" : true,
                  "metadata" : { }
                } ]
              },
              "containsNull" : true
            },
            "nullable" : true,
            "metadata" : { }
          } ]
        },
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "twitter_filter_level",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "twitter_lang",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "verb",
        "type" : "string",
        "nullable" : true,
        "metadata" : { }
      }, {
        "name" : "withheld_in_countries",
        "type" : {
          "type" : "array",
          "elementType" : "string",
          "containsNull" : true
        },
        "nullable" : true,
        "metadata" : { }
      } ]
    },
    "nullable" : true,
    "metadata" : { }
  }, {
    "name" : "verb",
    "type" : "string",
    "nullable" : true,
    "metadata" : { }
  }, {
    "name" : "withheld_in_countries",
    "type" : {
      "type" : "array",
      "elementType" : "string",
      "containsNull" : true
    },
    "nullable" : true,
    "metadata" : { }
  } ]
}