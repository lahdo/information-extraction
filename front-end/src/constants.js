export const testResults = [
    {
        "phone_number": "+1-206-118-2564",
        "due_date": "March 10, 2016",
        "subtotal_price": "$156.00",
        "items": [{
            "item_total_price": "$36.00",
            "item_quantity": "2",
            "item_price": "$18.00",
            "item_description": "Skinnie Biscotti : Original Almond"
        }, {
            "item_total_price": "$40.00",
            "item_quantity": "4",
            "item_price": "$10.00",
            "item_description": "Skinnie Biscotti : Apriot"
        }, {
            "item_total_price": "$40.00",
            "item_quantity": "5",
            "item_price": "$8.00",
            "item_description": "Skinnie Biscotti : Double Chocolate"
        }, {
            "item_total_price": "$20.00",
            "item_quantity": "4",
            "item_price": "$5.00",
            "item_description": "Town 82K : Natural Black"
        }, {
            "item_total_price": "$20.00",
            "item_quantity": "5",
            "item_price": "$4.00",
            "item_description": "Town 82K : Oat Tea"
        }],
        "invoice_date": "February 23, 2016",
        "total_due": "$178.48",
        "company_name": "Goomel Ltd",
        "sales_tax": "$12.48",
        "invoice_number": "100",
        "sales_tax_percent": "8%",
        "shipping_price": "$10.00"
    }
];

/*
 export const testResults2 = [
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "19.07.2017",
 "items": [{'quantity': '1,000', 'price': '618,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "13.11.2017",
 "items": [{'quantity': '1,000', 'price': '618,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "20.11.2017",
 "items": [{'quantity': '1,000', 'price': '710,70'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH Geis Industrieservice GmbH Lager-HSDL , Tor : 11-13 GeschĂ¤ftsgebiet SY - Herr Bucklisch An den Sandgruben 1",
 "po_date": "11.04.2017",
 "items": [{'quantity': '60,000', 'price': '7.340,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim .",
 "po_date": "19.04.2017",
 "items": [{'quantity': '1,000', 'price': '852,80'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "22.11.2017",
 "items": [{'quantity': '1,000', 'price': '710,70'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH Geis Industrieservice GmbH Lager-HSDL , Tor : 11-13 GeschĂ¤ftsgebiet SY - Herr Bucklisch An den Sandgruben 1 91301 Forchheim .",
 "po_date": "18.07.2017",
 "items": [{'quantity': '6,000', 'price': '2.840,00'}, {'price': '188,50'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim .",
 "po_date": "12.04.2017",
 "items": [{'quantity': '1,000', 'price': '1.014,67'}, {'quantity': '1,000', 'price': '1.518,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH Geis Industrieservice GmbH Warenannahme , Tor 11-13 GeschĂ¤ftsgebiet Digital Health Services An den Sandgruben 1 91301 Forchheim",
 "po_date": "23.10.2017",
 "items": [{'quantity': '1,000', 'price': '3.863,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim .",
 "po_date": "18.04.2017",
 "items": [{'quantity': '1,000', 'price': '2.219,17'}, {'quantity': '1,000', 'price': '1.430,00'}]
 },
 {
 "delivery_address": "Siemens AG PD PA AE R\u0026D - E Kuehn , Michaela ( Lustig ) Siemensallee 84 / - / - / 03.2110 / 1 D-76187 KARLSRUHE",
 "po_date": "23.10.2017",
 "items": [{'quantity': '2', 'price': '2.372,42'}, {'quantity': '2', 'price': '502,30'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim .",
 "po_date": "25.04.2017",
 "items": [{'quantity': '1,000', 'price': '618,00'}, {'quantity': '1,000', 'price': '852,80'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "16.11.2017",
 "items": [{'quantity': '1,000', 'price': '419,18'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim .",
 "po_date": "24.04.2017",
 "items": [{'quantity': '1,000', 'price': '618,00'}, {'quantity': '1,000', 'price': '852,80'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "14.07.2017",
 "items": [{'quantity': '1,000', 'price': '1.430,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "25.07.2017",
 "items": [{'quantity': '1,000', 'price': '364,50'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "29.08.2017",
 "items": [{'quantity': '1,000', 'price': '618,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "26.09.2017",
 "items": [{'quantity': '1,000', 'price': '618,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "27.07.2017",
 "items": [{'quantity': '1,000', 'price': '618,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "27.07.2017",
 "items": [{'quantity': '1,000', 'price': '618,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "22.08.2017",
 "items": [{'quantity': '1,000', 'price': '618,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "28.07.2017",
 "items": [{'quantity': '1,000', 'price': '618,00'}]
 },
 {
 "delivery_address": "Siemens AG DF CS LD FSC NMA RPC Anlieferung Bau 13.4 Vogelweiherstrasse 1-15 90441 NĂĽrnberg",
 "po_date": "08.11.2017",
 "items": [{'quantity': '2'}, {'quantity': '4', 'price': '116,98'}, {'price': '75,20'}]
 },
 {
 "delivery_address": "Telekom Deutschland GmbH ( TDG ) c/o Matthias MĂ¶hring Dieselstr .",
 "po_date": "29.05.2017",
 "items": [{'quantity': '2', 'price': '24.596,53'}, {'quantity': '2'}, {
 'quantity': '2',
 'price': '2.993,13'
 }, {'quantity': '2', 'price': '2.167,90'}]
 },
 {
 "po_date": "07.11.2017", "items": [{'quantity': '1', 'price': '637,00'}]
 },
 {
 "delivery_address": "T-Systems International GmbH Dennis Reith Gebaude : 49 173 9256848 Etage : - Raum : 1 Stock , Elisabeth-Selbert-Str .",
 "po_date": "24.10.2017",
 "items": [{'quantity': '4', 'price': '36.879,55'}, {'quantity': '4', 'price': '234,00'}, {
 'quantity': '4',
 'price': '341,50'
 }, {'quantity': '36', 'price': '111,83'}]
 },
 {
 "delivery_address": "Siemens AG DF CS LD FSC NMA RPC Anlieferung Bau 13.4 Vogelweiherstrasse 1-15 90441 NĂĽrnberg",
 "po_date": "16.10.2017",
 "items": [{'quantity': '2', 'price': '79,70'}, {'quantity': '1'}]
 },
 {
 "delivery_address": "Siemens AG EM DG PRO D PA SP Karl-Heinz Weber HumboldtstraĂźe 59 90459 NĂĽrnberg Firma Siemens AG EM DG NĂĽrnberg HumboldtstraĂźe 59 90459 NĂĽrnberg",
 "items": [{'quantity': '1,00', 'price': '299,06'}, {'quantity': '1,00'}]
 },
 {
 "delivery_address": "Telekom Deutschland GmbH ( TDG ) TNL SĂĽdwest PTI 22 Herr Christoph Borchardt Neue-Land-Str . Telekom Deutschland GmbH ( TDG ) Herr Martin Fischer TNL SĂĽdwest PTI 22 RaimundstraĂźe 48 60431 Frankfurt Telekom Deutschland GmbH ( TDG ) TNL SĂĽdwest PTI22 Herr Martin Fischer RaimundstraĂźe 48 60431 Frankfurt",
 "po_date": "04.08.2017",
 "items": [{'quantity': '1', 'price': '5.616,56'}, {'quantity': '1', 'price': '5.616,56'}, {
 'quantity': '1',
 'price': '5.616,56'
 }]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH Geis Industrieservice GmbH Lager-HSDL , Tor : 11-13 GeschĂ¤ftsgebiet SY - Herr Bucklisch An den Sandgruben 1 91301 Forchheim .",
 "po_date": "01.08.2017",
 "items": [{'quantity': '15,000', 'price': '1.150,00'}]
 },
 {
 "delivery_address": "Telekom Deutschland GmbH ( TDG ) c/o BĂ¤uerlein / Flieger/Stretz Gutenbergstr .",
 "po_date": "24.07.2017",
 "items": [{'quantity': '2', 'price': '8.033,40'}, {'quantity': '2', 'price': '200,10'}, {
 'quantity': '2',
 'price': '291,00'
 }, {'quantity': '2', 'price': '112,80'}, {'quantity': '2', 'price': '46,00'}]
 },
 {
 "delivery_address": "Telekom Deutschland GmbH ( TDG ) DT Netzproduktion GmbH Wiengarn Da RaimundstraĂźe 48-54 60431 Frankfurt",
 "po_date": "04.08.2017",
 "items": [{'quantity': '2', 'price': '8.033,40'}, {'quantity': '2', 'price': '200,10'}, {
 'quantity': '2',
 'price': '291,00'
 }, {'quantity': '2', 'price': '112,80'}, {'quantity': '2', 'price': '46,00'}]
 },
 {
 "delivery_address": "T-Systems im Hause Airbus Stefan Hutchins Gebaude : 74 Etage : x Raum : x Willy-Messerschmidt-Str .",
 "po_date": "18.10.2017",
 "items": [{'quantity': '1', 'price': '50.925,64'}, {'price': '68.808,40'}]
 },
 {
 "delivery_address": "Bezold GmbH RC-DE BT Projektlager NORD 120 - Projekt FS/SES SBT HBG Dr. Otto-Leich-StraĂźe 16 90542 Eckental",
 "po_date": "23.08.2017",
 "items": [{'quantity': '2', 'price': '86,94'}]
 },
 {
 "delivery_address": "Vodafone Kabel Deutschland Vertrieb und Mr. Pedro Gomes Breitlacher Strasse 96 60489 Frankfurt/Main",
 "po_date": "12.04.2017",
 "items": []
 },
 {
 "po_date": "22.08.2017",
 "items": [{'quantity': '1', 'price': '47.086,37'}, {
 'quantity': '1',
 'price': '3.491,67'
 }, {'quantity': '60'}, {'quantity': '1', 'price': '5.024,01'}, {
 'quantity': '1',
 'price': '37.330,91'
 }, {'quantity': '1'}, {'quantity': '60'}, {'quantity': '1', 'price': '2.682,86'}]
 },
 {
 "delivery_address": "T-Systems International GmbH",
 "po_date": "22.08.2017",
 "items": [{'quantity': '1', 'price': '47.086,37'}, {
 'quantity': '1',
 'price': '3.491,67'
 }, {'quantity': '60'}, {'quantity': '1', 'price': '5.024,01'}, {
 'quantity': '1',
 'price': '37.330,91'
 }, {'quantity': '1'}, {'quantity': '1', 'price': '2.682,86'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH Geis Industrieservice GmbH Lager-HSDL , Tor : 11-13 GeschĂ¤ftsgebiet SY - Herr Bucklisch An den Sandgruben 1 91301 Forchheim .",
 "po_date": "12.07.2017",
 "items": [{'quantity': '45,000', 'price': '3.980,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH Geis Industrieservice GmbH Lager-HSDL , Tor : 11-13 GeschĂ¤ftsgebiet SY - Herr Bucklisch An den Sandgruben 1 91301 Forchheim .",
 "po_date": "12.07.2017",
 "items": [{'quantity': '10,000', 'price': '18,00'}]
 },
 {
 "delivery_address": "T-Systems International GmbH",
 "po_date": "20.10.2017",
 "items": [{'quantity': '4', 'price': '4.552,90'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "01.08.2017",
 "items": [{'quantity': '1,000', 'price': '184,80'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "28.07.2017",
 "items": [{'quantity': '1,000', 'price': '184,80'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "28.07.2017",
 "items": [{'quantity': '1,000', 'price': '184,80'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "28.07.2017",
 "items": [{'quantity': '1,000', 'price': '184,80'}]
 },
 {
 "delivery_address": "Telekom Deutschland GmbH ( TDG ) c/o Zvonko Duvnjak , FMED-95 DieselstraĂźe 43 90441 NĂĽrnberg",
 "po_date": "06.11.2017",
 "items": [{'quantity': '1', 'price': '374,40'}, {'price': '2.602,80'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "27.09.2017",
 "items": [{'quantity': '1,000', 'price': '1.430,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "05.09.2017",
 "items": [{'quantity': '1,000', 'price': '1.430,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "15.09.2017",
 "items": [{'quantity': '1,000', 'price': '1.430,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "01.08.2017",
 "items": [{'quantity': '1,000', 'price': '1.430,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "08.09.2017",
 "items": [{'quantity': '1,000', 'price': '1.430,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "21.08.2017",
 "items": [{'quantity': '1,000', 'price': '1.430,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "04.09.2017",
 "items": [{'quantity': '1,000', 'price': '1.430,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "07.08.2017",
 "items": [{'quantity': '1,000', 'price': '1.430,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "12.09.2017",
 "items": [{'quantity': '1,000', 'price': '1.430,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "12.07.2017",
 "items": [{'quantity': '1,000', 'price': '1.430,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "07.08.2017",
 "items": [{'quantity': '1,000', 'price': '1.430,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "30.08.2017",
 "items": [{'quantity': '1,000', 'price': '1.430,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "01.08.2017",
 "items": [{'quantity': '1,000', 'price': '1.430,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "28.07.2017",
 "items": [{'quantity': '1,000', 'price': '1.430,00'}]
 },
 {
 "delivery_address": "Deutsche Telekom AG Stephen Filges Gebaude : 0911 1509414 Etage : EG Raum : 16/17 Georg-Elser-StraBe 6 90441 Nurnberg",
 "po_date": "16.11.2017",
 "items": [{'quantity': '1', 'price': '652,50'}, {'quantity': '1', 'price': '760,50'}, {
 'quantity': '1',
 'price': '18,00'
 }]
 },
 {
 "items": [{'quantity': '2', 'price': '718,25'}, {'price': '1.436,50'}]
 },
 {
 "delivery_address": "Siemens AG PG ES IC T2000SOL R\u0026D H. Sierocks Bau 82 , Raum C2095 ĂĽber C2087 Freyeslebenstr .",
 "items": [{'quantity': '1', 'price': '252,00'}]
 },
 {
 "delivery_address": "Stefan Wolfram Rehhecke 50 Ratingen Nrth Rhine Westfalia ( 05 ) 40885 DE Stefan Wolfram Rehhecke 50 Ratingen Nrth Rhine Westfalia ( 05 ) 40885 DE Stefan Wolfram Rehhecke 50 Ratingen Nrth Rhine Westfalia ( 05 ) 40885 DE Stefan Wolfram Rehhecke 50 Ratingen Nrth Rhine Westfalia ( 05 ) 40885 DE Stefan Wolfram Rehhecke 50 Ratingen Nrth Rhine Westfalia ( 05 ) 40885 DE",
 "items": [{'quantity': '1', 'price': '346,472.52'}, {'quantity': '1', 'price': '9,664.00'}, {
 'quantity': '1',
 'price': '47,857.30'
 }, {'quantity': '1', 'price': '11,175.80'}, {'quantity': '1', 'price': '4,233.00'}]
 },
 {
 "po_date": "23/10/2017 23/10/2017", "items": [{'quantity': '1', 'price': '49,018.31'}]
 },
 {
 "items": [{'quantity': '12', 'price': '702.40'}, {'quantity': '12', 'price': '147.52'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "28.08.2017",
 "items": [{'quantity': '1,000', 'price': '419,18'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "26.09.2017",
 "items": [{'quantity': '1,000', 'price': '618,00'}]
 },
 {
 "delivery_address": "Siemens AG DF CS LD FSC NMA RPC Anlieferung Bau 13.4 Vogel weiherstrasse 1-15 90441 NĂĽrnberg",
 "po_date": "06.04.2017",
 "items": [{'quantity': '8', 'price': '121,31'}, {'quantity': '8', 'price': '230,75'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "27.09.2017",
 "items": [{'quantity': '1,000', 'price': '618,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "05.09.2017",
 "items": [{'quantity': '1,000', 'price': '710,70'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "11.07.2017",
 "items": [{'quantity': '1,000', 'price': '618,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH Geis Industrieservice GmbH Lager-HSDL , Tor : 11-13 GeschĂ¤ftsgebiet SY - Herr Skeledzic An den Sandgruben 1 91301 Forchheim .",
 "po_date": "09.08.2017",
 "items": [{'quantity': '20,000', 'price': '3.980,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "14.08.2017",
 "items": [{'quantity': '1,000', 'price': '2.219,17'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "03.07.2017",
 "items": [{'quantity': '1,000', 'price': '710,70'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "25.09.2017",
 "items": [{'quantity': '1,000', 'price': '618,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "14.08.2017",
 "items": [{'quantity': '1,000', 'price': '710,70'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "10.07.2017",
 "items": [{'quantity': '1,000', 'price': '1.518,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "28.08.2017",
 "items": [{'quantity': '1,000', 'price': '1.518,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "24.11.2017",
 "items": [{'quantity': '1,000', 'price': '806,10'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim .",
 "po_date": "07.04.2017",
 "items": [{'quantity': '1,000', 'price': '1.014,67'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim .",
 "po_date": "20.04.2017",
 "items": [{'quantity': '1,000', 'price': '710,70'}, {'quantity': '1,000', 'price': '997,78'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH Geis Industrieservice GmbH Lager-HSDL , Tor : 11-13 GeschĂ¤ftsgebiet SY - Herr Bucklisch An den Sandgruben 1",
 "po_date": "19.04.2017",
 "items": [{'quantity': '1,000', 'price': '188,50'}, {'quantity': '1,000', 'price': '2.840,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH Geis Industrieservice GmbH Lager-HSDL , Tor : 11-13 GeschĂ¤ftsgebiet SY - Herr Bucklisch An den Sandgruben 1",
 "po_date": "10.04.2017",
 "items": [{'quantity': '50,000', 'price': '35,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "25.07.2017",
 "items": [{'quantity': '1,000', 'price': '1.430,00'}, {'quantity': '1,000', 'price': '1.430,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim .",
 "po_date": "19.04.2017",
 "items": [{'quantity': '1,000', 'price': '1.377,50'}, {'quantity': '1,000', 'price': '805,10'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH Geis Industrieservice GmbH Lager-HSDL , Tor : 11-13 GeschĂ¤ftsgebiet SY - Herr Bucklisch An den Sandgruben 1 91301 Forchheim .",
 "po_date": "25.07.2017",
 "items": [{'quantity': '2,000', 'price': '2.840,00'}, {'quantity': '2,000', 'price': '188,50'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "25.07.2017",
 "items": [{'quantity': '1,000', 'price': '1.430,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "21.07.2017",
 "items": [{'quantity': '1,000', 'price': '364,50'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim .",
 "po_date": "07.04.2017",
 "items": [{'quantity': '1,000', 'price': '1.014,67'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "25.07.2017",
 "items": [{'quantity': '1,000', 'price': '419,18'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "24.07.2017",
 "items": [{'quantity': '1,000', 'price': '806,10'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH Geis Industrieservice GmbH Lager-HSDL , Tor : 11-13 GeschĂ¤ftsgebiet SY - Herr Bucklisch An den Sandgruben 1",
 "po_date": "11.04.2017",
 "items": [{'quantity': '10,000', 'price': '3.980,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim .",
 "po_date": "11.04.2017",
 "items": [{'quantity': '1,000', 'price': '2.219,17'}, {'quantity': '1,000', 'price': '1.430,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "02.11.2017",
 "items": [{'quantity': '1,000', 'price': '618,00'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim .",
 "po_date": "24.04.2017",
 "items": [{'quantity': '1,000', 'price': '618,00'}, {'quantity': '1,000', 'price': '852,80'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH Geis Industrieservice GmbH Warenannahme , Tor 11-13 GeschĂ¤ftsgebiet Digital Health Services An den Sandgruben 1 91301 Forchheim",
 "po_date": "13.11.2017",
 "items": [{'quantity': '1,000', 'price': '318,50'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH Geis Industrieservice GmbH Lager-HSDL , Tor : 11-13 GeschĂ¤ftsgebiet SY - Herr Bucklisch An den Sandgruben 1 91301 Forchheim .",
 "po_date": "19.07.2017",
 "items": [{'quantity': '1,000', 'price': '2.840,00'}, {'quantity': '1,000', 'price': '188,50'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "16.10.2017",
 "items": [{'quantity': '1,000', 'price': '806,10'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim .",
 "po_date": "16.03.2017",
 "items": [{'quantity': '1,000', 'price': '419,18'}, {'quantity': '1,000', 'price': '573,07'}]
 },
 {
 "delivery_address": "Siemens Healthcare GmbH GeschĂ¤ftsgebiet SYNGO ( Lizenzen ) Geis Industrieservice GmbH An den Sandgruben 1 91031 Forchheim",
 "po_date": "20.11.2017",
 "items": [{'quantity': '1,000', 'price': '419,18'}]
 }];*/
