# Obligatorisk opgave 1 - 3. Semester

## Øvelse 1 - opsætning
- HTTP-verb + Endpoint: Post https://api.dropboxapi.com/2/files/list_folder
- Body request:
``` 
{
"path":"",
"recursive":false,
"include_media_info":false,
"include_deleted":false,
"include_has_explicit_shared_members":false,
"include_mounted_folders":true,
"include_non_downloadable_files":true
}
```
- Response:
200 OK
``` 
{
"entries": [],
"cursor": "AAEfIahUXnafl2Uo382YsTCTNdMkFJdzBKNKjOMybULNtSKaoKW11C9U14WO2ynp7hX1QalNRi-GtaLENPEOye7fVS66oJjg-f9yyJmDYi_XmZcigN-CfKKRpdqlAi4W6y8D2NKWoKs_3Bg5G_SFlJGJZ5qxpHN8TKi_r02SztiDwUym3sSMNKl8Hbl9gR9fgWQ",
"has_more": false
}
``` 

## Øvelse 2 - opret en mappe
- HTTP-verb + Endpoint: Post https://api.dropboxapi.com/2/files/create_folder_v2
- Body request:
``` 
{
"autorename": false,
"path": "/Obligatorisk%20opgave%201%20-%203.%20semester/TestMappe"
}
```
- Response:
200 OK
```
{
    "metadata": {
        "name": "testmappe",
        "path_lower": "/obligatorisk%20opgave%201%20-%203.%20semester/TestMappe",
        "path_display": "/Obligatorisk%20opgave%201%20-%203.%20semester/TestMappe",
        "id": "id:NvXdVRLJDdsAAAAAAAAACA"
    }
}
```

## Øvelse 3 - hent mappe detaljer
- HTTP-verb + Endpoint: Post https://api.dropboxapi.com/2/files/get_metadata
- Body request:
```
{
"include_deleted": false,
"include_has_explicit_shared_members": false,
"include_media_info": false,
"path": "/Obligatorisk%20opgave%201%20-%203.%20semester/TestMappe"
}
``` 
- Response:
200 OK
``` 
{
    ".tag": "folder",
    "name": "testmappe",
    "path_lower": "/obligatorisk%20opgave%201%20-%203.%20semester/TestMappe",
    "path_display": "/Obligatorisk%20opgave%201%20-%203.%20semester/TestMappe",
    "id": "id:NvXdVRLJDdsAAAAAAAAACA"
}
``` 

## Øvelse 4 - upload en fil
- HTTP-verb + Endpoint: Post https://content.dropboxapi.com/2/files/upload
- Headers:
  1. Authorization = ACCESS TOKEN
  2. Content-type = application/octet-stream
  3. Dropbox-API-Arg = {"autorename": false, "mode":"add", "mute":false, "path": "/TestMappe/Random_cat.jpg", "strict_conflict": false}
- Body request:
```
{
binary - selected file: Random cat.jpg
}
``` 
- Response: 200 OK
```
{
    "name": "Random_cat.jpg",
    "path_lower": "/testmappe/random_cat.jpg",
    "path_display": "/TestMappe/Random_cat.jpg",
    "id": "id:NvXdVRLJDdsAAAAAAAAAHQ",
    "client_modified": "2023-09-07T03:52:59Z",
    "server_modified": "2023-09-07T03:52:59Z",
    "rev": "01604bccbcbdd17000000010d032ad1",
    "size": 4573,
    "is_downloadable": true,
    "content_hash": "a7ac543469af7cb837c5d025fb3364d88397aa7344f1675f59eb8369f7e8dbb3"
}
```

## Øvelse 5 - slet en fil
- HTTP-verb + Endpoint: Post https://api.dropboxapi.com/2/files/delete_v2
- Body request:
```
{
    "path": "/TestMappe/Random_cat.jpg4"
}
``` 
- Response: 200 OK
```
{
    "metadata": {
        ".tag": "file",
        "name": "Random_cat.jpg4",
        "path_lower": "/testmappe/random_cat.jpg4",
        "path_display": "/TestMappe/Random_cat.jpg4",
        "id": "id:NvXdVRLJDdsAAAAAAAAAHA",
        "client_modified": "2023-09-06T16:59:11Z",
        "server_modified": "2023-09-06T16:59:12Z",
        "rev": "01604b3a9a63553000000010d032ad1",
        "size": 9155,
        "is_downloadable": true,
        "content_hash": "3858293c590b603a663d7bb5ee9511402fa2a0b129ff471db21a959d562161e0"
    }
}
```

## Øvelse 7 - søg efter filer
- HTTP-verb + Endpoint: Post https://api.dropboxapi.com/2/files/search_v2
- Body request:
```
{
    "match_field_options": {
        "include_highlights": false
    },
    "options": {
        "file_status": "active",
        "filename_only": false,
        "max_results": 10,
        "path": "/TestMappe"
    },
    "query": "cat"
}
``` 
- Response: 200 OK. Jeg uploaded 5 filer, slettede 1 og respons viser alle resterende 4 filer.
```
{
    "has_more": false,
    "matches": [
        {
            "match_type": {
                ".tag": "filename_and_content"
            },
            "metadata": {
                ".tag": "metadata",
                "metadata": {
                    ".tag": "file",
                    "client_modified": "2023-09-07T03:52:59Z",
                    "content_hash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
                    "id": "id:NvXdVRLJDdsAAAAAAAAAHQ",
                    "is_downloadable": true,
                    "name": "Random_cat.jpg5",
                    "path_display": "/TestMappe/Random_cat.jpg5",
                    "path_lower": "/testmappe/random_cat.jpg5",
                    "rev": "01604bccbcbdd17000000010d032ad1",
                    "server_modified": "2023-09-06T16:58:32Z",
                    "sharing_info": {
                        "modified_by": "dbid:AADIGY-7gl-2MkF9BiRYPuTYNEMcaXrqMsE",
                        "parent_shared_folder_id": "4513278673",
                        "read_only": false
                    },
                    "size": 4573
                }
            }
        },
        {
            "match_type": {
                ".tag": "filename_and_content"
            },
            "metadata": {
                ".tag": "metadata",
                "metadata": {
                    ".tag": "file",
                    "client_modified": "2023-09-06T16:53:11Z",
                    "content_hash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
                    "id": "id:NvXdVRLJDdsAAAAAAAAAGQ",
                    "is_downloadable": true,
                    "name": "Random_cat.jpg",
                    "path_display": "/TestMappe/Random_cat.jpg",
                    "path_lower": "/testmappe/random_cat.jpg",
                    "rev": "01604b3942d5216000000010d032ad1",
                    "server_modified": "2023-09-06T16:58:32Z",
                    "sharing_info": {
                        "modified_by": "dbid:AADIGY-7gl-2MkF9BiRYPuTYNEMcaXrqMsE",
                        "parent_shared_folder_id": "4513278673",
                        "read_only": false
                    },
                    "size": 11096
                }
            }
        },
        {
            "match_type": {
                ".tag": "filename_and_content"
            },
            "metadata": {
                ".tag": "metadata",
                "metadata": {
                    ".tag": "file",
                    "client_modified": "2023-09-06T16:57:29Z",
                    "content_hash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
                    "id": "id:NvXdVRLJDdsAAAAAAAAAGg",
                    "is_downloadable": true,
                    "name": "Random_cat.jpg2",
                    "path_display": "/TestMappe/Random_cat.jpg2",
                    "path_lower": "/testmappe/random_cat.jpg2",
                    "rev": "01604b3a3897779000000010d032ad1",
                    "server_modified": "2023-09-06T16:58:32Z",
                    "sharing_info": {
                        "modified_by": "dbid:AADIGY-7gl-2MkF9BiRYPuTYNEMcaXrqMsE",
                        "parent_shared_folder_id": "4513278673",
                        "read_only": false
                    },
                    "size": 6107
                }
            }
        },
        {
            "match_type": {
                ".tag": "filename_and_content"
            },
            "metadata": {
                ".tag": "metadata",
                "metadata": {
                    ".tag": "file",
                    "client_modified": "2023-09-06T16:58:31Z",
                    "content_hash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
                    "id": "id:NvXdVRLJDdsAAAAAAAAAGw",
                    "is_downloadable": true,
                    "name": "Random_cat.jpg3",
                    "path_display": "/TestMappe/Random_cat.jpg3",
                    "path_lower": "/testmappe/random_cat.jpg3",
                    "rev": "01604b3a74421fd000000010d032ad1",
                    "server_modified": "2023-09-06T16:58:32Z",
                    "sharing_info": {
                        "modified_by": "dbid:AADIGY-7gl-2MkF9BiRYPuTYNEMcaXrqMsE",
                        "parent_shared_folder_id": "4513278673",
                        "read_only": false
                    },
                    "size": 4982
                }
            }
        }
    ]
}
```

## Øvelse 8 - flyt en fil
- HTTP-verb + Endpoint: Post https://api.dropboxapi.com/2/files/move_v2
- Body request:
```
{
"allow_ownership_transfer": false,
"allow_shared_folder": false,
"autorename": false,
"from_path": "/TestMappe/Random_cat.jpg5",
"to_path": "/TestMappe2/Random_cat.jpg5"
}
``` 
- Response: 200 OK
```
{
    "metadata": {
        ".tag": "file",
        "name": "Random_cat.jpg5",
        "path_lower": "/testmappe2/random_cat.jpg5",
        "path_display": "/TestMappe2/Random_cat.jpg5",
        "id": "id:NvXdVRLJDdsAAAAAAAAAHQ",
        "client_modified": "2023-09-07T03:52:59Z",
        "server_modified": "2023-09-07T10:52:48Z",
        "rev": "01604c2a925ee2e000000010d032ad1",
        "size": 4573,
        "is_downloadable": true,
        "content_hash": "a7ac543469af7cb837c5d025fb3364d88397aa7344f1675f59eb8369f7e8dbb3"
    }
}
```

## Øvelse 9 - kopier en fil
Jeg flyttde et billede til en anden mappe/folder (TestMappe2) i forrige opgave og kopiede dette billede tilbage igen til oprindelige mappe/folder (TestMappe).
- HTTP-verb + Endpoint: Post https://api.dropboxapi.com/2/files/copy_v2
- Body request:
```
{
    "allow_ownership_transfer": false,
    "allow_shared_folder": false,
    "autorename": false,
    "from_path": "/TestMappe2/Random_cat.jpg5",
    "to_path": "/TestMappe/Random_cat.jpg5"
}
``` 
- Response: 200 OK
```
{
    "metadata": {
        ".tag": "file",
        "name": "Random_cat.jpg5",
        "path_lower": "/testmappe/random_cat.jpg5",
        "path_display": "/TestMappe/Random_cat.jpg5",
        "id": "id:NvXdVRLJDdsAAAAAAAAAHw",
        "client_modified": "2023-09-07T03:52:59Z",
        "server_modified": "2023-09-07T11:04:35Z",
        "rev": "01604c2d350f366000000010d032ad1",
        "size": 4573,
        "is_downloadable": true,
        "content_hash": "a7ac543469af7cb837c5d025fb3364d88397aa7344f1675f59eb8369f7e8dbb3"
    }
}
```

## Øvelse 10 - Brug JavaScript's Fetch med Dropbox API
- Tjek HTML: https://github.com/Mahe0055/Obligatorisk-opgave1-3.Semester/blob/main/obligatoriskOpg1.html
- Tjek JavaScript: https://github.com/Mahe0055/Obligatorisk-opgave1-3.Semester/blob/main/obligatoriskOpg1.js

## Øvelse 11 - Er https://api.dropboxapi.com/2/ Restfull or not?
Denne API er ikke RESTfull, da der eksempelvis kun bruges POST som HTTP verb og ikke andre i HTTP requests.  
