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
