import { BandeiraModel } from "../model/bandeira";

export class BandeiraRepository {
  private bandeiras: Array<BandeiraModel>;

  constructor(){ }

  private static createBandeiras(): Array<BandeiraModel> {
    return [
      new BandeiraModel(
        "Brazil",
        "+55",
        "BR"
      ),
      new BandeiraModel(
        "United States",
        "+1",
        "US"
      ), new BandeiraModel(
        "Israel",
        "+972",
        "IL"
      ), new BandeiraModel(
        "Afghanistan",
        "+93",
        "AF"
      ), new BandeiraModel(
        "Albania",
        "+355",
        "AL"
      ), new BandeiraModel(
        "Algeria",
        "+213",
        "DZ"
      ), new BandeiraModel(
        "AmericanSamoa",
        "+1 684",
        "AS"
      ), new BandeiraModel(
        "Andorra",
        "+376",
        "AD"
      ), new BandeiraModel(
        "Angola",
        "+244",
        "AO"
      ), new BandeiraModel(
        "Anguilla",
        "+1 264",
        "AI"
      ), new BandeiraModel(
        "Antigua and Barbuda",
        "+1268",
        "AG"
      ), new BandeiraModel(
        "Argentina",
        "+54",
        "AR"
      ), new BandeiraModel(
        "Armenia",
        "+374",
        "AM"
      ), new BandeiraModel(
        "Aruba",
        "+297",
        "AW"
      ), new BandeiraModel(
        "Australia",
        "+61",
        "AU"
      ), new BandeiraModel(
        "Austria",
        "+43",
        "AT"
      ), new BandeiraModel(
        "Azerbaijan",
        "+994",
        "AZ"
      ), new BandeiraModel(
        "Bahamas",
        "+1 242",
        "BS"
      ), new BandeiraModel(
        "Bahrain",
        "+973",
        "BH"
      ), new BandeiraModel(
        "Bangladesh",
        "+880",
        "BD"
      ), new BandeiraModel(
        "Barbados",
        "+1 246",
        "BB"
      ), new BandeiraModel(
        "Belarus",
        "+375",
        "BY"
      ), new BandeiraModel(
        "Belgium",
        "+32",
        "BE"
      ), new BandeiraModel(
        "Belize",
        "+501",
        "BZ"
      ), new BandeiraModel(
        "Benin",
        "+229",
        "BJ"
      ), new BandeiraModel(
        "Bermuda",
        "+1 441",
        "BM"
      ), new BandeiraModel(
        "Bhutan",
        "+975",
        "BT"
      ), new BandeiraModel(
        "Bosnia and Herzegovina",
        "+387",
        "BA"
      ), new BandeiraModel(
        "Botswana",
        "+267",
        "BW"
      ), new BandeiraModel(
        "British Indian Ocean Territory",
        "+246",
        "IO"
      ), new BandeiraModel(
        "Bulgaria",
        "+359",
        "BG"
      ), new BandeiraModel(
        "Burkina Faso",
        "+226",
        "BF"
      ), new BandeiraModel(
        "Burundi",
        "+257",
        "BI"
      ), new BandeiraModel(
        "Cambodia",
        "+855",
        "KH"
      ), new BandeiraModel(
        "Cameroon",
        "+237",
        "CM"
      ), new BandeiraModel(
        "Canada",
        "+1",
        "CA"
      ), new BandeiraModel(
        "Cape Verde",
        "+238",
        "CV"
      ), new BandeiraModel(
        "Cayman Islands",
        "+ 345",
        "KY"
      ), new BandeiraModel(
        "Central African Republic",
        "+236",
        "CF"
      ), new BandeiraModel(
        "Chad",
        "+235",
        "TD"
      ), new BandeiraModel(
        "Chile",
        "+56",
        "CL"
      ), new BandeiraModel(
        "China",
        "+86",
        "CN"
      ), new BandeiraModel(
        "Christmas Island",
        "+61",
        "CX"
      ), new BandeiraModel(
        "Colombia",
        "+57",
        "CO"
      ), new BandeiraModel(
        "Comoros",
        "+269",
        "KM"
      ), new BandeiraModel(
        "Congo",
        "+242",
        "CG"
      ), new BandeiraModel(
        "Cook Islands",
        "+682",
        "CK"
      ), new BandeiraModel(
        "Costa Rica",
        "+506",
        "CR"
      ), new BandeiraModel(
        "Croatia",
        "+385",
        "HR"
      ), new BandeiraModel(
        "Cuba",
        "+53",
        "CU"
      ), new BandeiraModel(
        "Cyprus",
        "+537",
        "CY"
      ), new BandeiraModel(
        "Czech Republic",
        "+420",
        "CZ"
      ), new BandeiraModel(
        "Denmark",
        "+45",
        "DK"
      ), new BandeiraModel(
        "Djibouti",
        "+253",
        "DJ"
      ), new BandeiraModel(
        "Dominica",
        "+1 767",
        "DM"
      ), new BandeiraModel(
        "Dominican Republic",
        "+1 849",
        "DO"
      ), new BandeiraModel(
        "Ecuador",
        "+593",
        "EC"
      ), new BandeiraModel(
        "Egypt",
        "+20",
        "EG"
      ), new BandeiraModel(
        "El Salvador",
        "+503",
        "SV"
      ), new BandeiraModel(
        "Equatorial Guinea",
        "+240",
        "GQ"
      ), new BandeiraModel(
        "Eritrea",
        "+291",
        "ER"
      ), new BandeiraModel(
        "Estonia",
        "+372",
        "EE"
      ), new BandeiraModel(
        "Ethiopia",
        "+251",
        "ET"
      ), new BandeiraModel(
        "Faroe Islands",
        "+298",
        "FO"
      ), new BandeiraModel(
        "Fiji",
        "+679",
        "FJ"
      ), new BandeiraModel(
        "Finland",
        "+358",
        "FI"
      ), new BandeiraModel(
        "France",
        "+33",
        "FR"
      ), new BandeiraModel(
        "French Guiana",
        "+594",
        "GF"
      ), new BandeiraModel(
        "French Polynesia",
        "+689",
        "PF"
      ), new BandeiraModel(
        "Gabon",
        "+241",
        "GA"
      ), new BandeiraModel(
        "Gambia",
        "+220",
        "GM"
      ), new BandeiraModel(
        "Georgia",
        "+995",
        "GE"
      ), new BandeiraModel(
        "Germany",
        "+49",
        "DE"
      ), new BandeiraModel(
        "Ghana",
        "+233",
        "GH"
      ), new BandeiraModel(
        "Gibraltar",
        "+350",
        "GI"
      ), new BandeiraModel(
        "Greece",
        "+30",
        "GR"
      ), new BandeiraModel(
        "Greenland",
        "+299",
        "GL"
      ), new BandeiraModel(
        "Grenada",
        "+1 473",
        "GD"
      ), new BandeiraModel(
        "Guadeloupe",
        "+590",
        "GP"
      ), new BandeiraModel(
        "Guam",
        "+1 671",
        "GU"
      ), new BandeiraModel(
        "Guatemala",
        "+502",
        "GT"
      ), new BandeiraModel(
        "Guinea",
        "+224",
        "GN"
      ), new BandeiraModel(
        "Guinea-Bissau",
        "+245",
        "GW"
      ), new BandeiraModel(
        "Guyana",
        "+595",
        "GY"
      ), new BandeiraModel(
        "Haiti",
        "+509",
        "HT"
      ), new BandeiraModel(
        "Honduras",
        "+504",
        "HN"
      ), new BandeiraModel(
        "Hungary",
        "+36",
        "HU"
      ), new BandeiraModel(
        "Iceland",
        "+354",
        "IS"
      ), new BandeiraModel(
        "India",
        "+91",
        "IN"
      ), new BandeiraModel(
        "Indonesia",
        "+62",
        "ID"
      ), new BandeiraModel(
        "Iraq",
        "+964",
        "IQ"
      ), new BandeiraModel(
        "Ireland",
        "+353",
        "IE"
      ), new BandeiraModel(
        "Israel",
        "+972",
        "IL"
      ), new BandeiraModel(
        "Italy",
        "+39",
        "IT"
      ), new BandeiraModel(
        "Jamaica",
        "+1 876",
        "JM"
      ), new BandeiraModel(
        "Japan",
        "+81",
        "JP"
      ), new BandeiraModel(
        "Jordan",
        "+962",
        "JO"
      ), new BandeiraModel(
        "Kazakhstan",
        "+7 7",
        "KZ"
      ), new BandeiraModel(
        "Kenya",
        "+254",
        "KE"
      ), new BandeiraModel(
        "Kiribati",
        "+686",
        "KI"
      ), new BandeiraModel(
        "Kuwait",
        "+965",
        "KW"
      ), new BandeiraModel(
        "Kyrgyzstan",
        "+996",
        "KG"
      ), new BandeiraModel(
        "Latvia",
        "+371",
        "LV"
      ), new BandeiraModel(
        "Lebanon",
        "+961",
        "LB"
      ), new BandeiraModel(
        "Lesotho",
        "+266",
        "LS"
      ), new BandeiraModel(
        "Liberia",
        "+231",
        "LR"
      ), new BandeiraModel(
        "Liechtenstein",
        "+423",
        "LI"
      ), new BandeiraModel(
        "Lithuania",
        "+370",
        "LT"
      ), new BandeiraModel(
        "Luxembourg",
        "+352",
        "LU"
      ), new BandeiraModel(
        "Madagascar",
        "+261",
        "MG"
      ), new BandeiraModel(
        "Malawi",
        "+265",
        "MW"
      ), new BandeiraModel(
        "Malaysia",
        "+60",
        "MY"
      ), new BandeiraModel(
        "Maldives",
        "+960",
        "MV"
      ), new BandeiraModel(
        "Mali",
        "+223",
        "ML"
      ), new BandeiraModel(
        "Malta",
        "+356",
        "MT"
      ), new BandeiraModel(
        "Marshall Islands",
        "+692",
        "MH"
      ), new BandeiraModel(
        "Martinique",
        "+596",
        "MQ"
      ), new BandeiraModel(
        "Mauritania",
        "+222",
        "MR"
      ), new BandeiraModel(
        "Mauritius",
        "+230",
        "MU"
      ), new BandeiraModel(
        "Mayotte",
        "+262",
        "YT"
      ), new BandeiraModel(
        "Mexico",
        "+52",
        "MX"
      ), new BandeiraModel(
        "Monaco",
        "+377",
        "MC"
      ), new BandeiraModel(
        "Mongolia",
        "+976",
        "MN"
      ), new BandeiraModel(
        "Montenegro",
        "+382",
        "ME"
      ), new BandeiraModel(
        "Montserrat",
        "+1664",
        "MS"
      ), new BandeiraModel(
        "Morocco",
        "+212",
        "MA"
      ), new BandeiraModel(
        "Myanmar",
        "+95",
        "MM"
      ), new BandeiraModel(
        "Namibia",
        "+264",
        "NA"
      ), new BandeiraModel(
        "Nauru",
        "+674",
        "NR"
      ), new BandeiraModel(
        "Nepal",
        "+977",
        "NP"
      ), new BandeiraModel(
        "Netherlands",
        "+31",
        "NL"
      ), new BandeiraModel(
        "Netherlands Antilles",
        "+599",
        "AN"
      ), new BandeiraModel(
        "New Caledonia",
        "+687",
        "NC"
      ), new BandeiraModel(
        "New Zealand",
        "+64",
        "NZ"
      ), new BandeiraModel(
        "Nicaragua",
        "+505",
        "NI"
      ), new BandeiraModel(
        "Niger",
        "+227",
        "NE"
      ), new BandeiraModel(
        "Nigeria",
        "+234",
        "NG"
      ), new BandeiraModel(
        "Niue",
        "+683",
        "NU"
      ), new BandeiraModel(
        "Norfolk Island",
        "+672",
        "NF"
      ), new BandeiraModel(
        "Northern Mariana Islands",
        "+1 670",
        "MP"
      ), new BandeiraModel(
        "Norway",
        "+47",
        "NO"
      ), new BandeiraModel(
        "Oman",
        "+968",
        "OM"
      ), new BandeiraModel(
        "Pakistan",
        "+92",
        "PK"
      ), new BandeiraModel(
        "Palau",
        "+680",
        "PW"
      ), new BandeiraModel(
        "Panama",
        "+507",
        "PA"
      ), new BandeiraModel(
        "Papua New Guinea",
        "+675",
        "PG"
      ), new BandeiraModel(
        "Paraguay",
        "+595",
        "PY"
      ), new BandeiraModel(
        "Peru",
        "+51",
        "PE"
      ), new BandeiraModel(
        "Philippines",
        "+63",
        "PH"
      ), new BandeiraModel(
        "Poland",
        "+48",
        "PL"
      ), new BandeiraModel(
        "Portugal",
        "+351",
        "PT"
      ), new BandeiraModel(
        "Puerto Rico",
        "+1 939",
        "PR"
      ), new BandeiraModel(
        "Qatar",
        "+974",
        "QA"
      ), new BandeiraModel(
        "Romania",
        "+40",
        "RO"
      ), new BandeiraModel(
        "Rwanda",
        "+250",
        "RW"
      ), new BandeiraModel(
        "Samoa",
        "+685",
        "WS"
      ), new BandeiraModel(
        "San Marino",
        "+378",
        "SM"
      ), new BandeiraModel(
        "Saudi Arabia",
        "+966",
        "SA"
      ), new BandeiraModel(
        "Senegal",
        "+221",
        "SN"
      ), new BandeiraModel(
        "Serbia",
        "+381",
        "RS"
      ), new BandeiraModel(
        "Seychelles",
        "+248",
        "SC"
      ), new BandeiraModel(
        "Sierra Leone",
        "+232",
        "SL"
      ), new BandeiraModel(
        "Singapore",
        "+65",
        "SG"
      ), new BandeiraModel(
        "Slovakia",
        "+421",
        "SK"
      ), new BandeiraModel(
        "Slovenia",
        "+386",
        "SI"
      ), new BandeiraModel(
        "Solomon Islands",
        "+677",
        "SB"
      ), new BandeiraModel(
        "South Africa",
        "+27",
        "ZA"
      ), new BandeiraModel(
        "South Georgia and the South Sandwich Islands",
        "+500",
        "GS"
      ), new BandeiraModel(
        "Spain",
        "+34",
        "ES"
      ), new BandeiraModel(
        "Sri Lanka",
        "+94",
        "LK"
      ), new BandeiraModel(
        "Sudan",
        "+249",
        "SD"
      ), new BandeiraModel(
        "Suribandeira_name",
        "+597",
        "SR"
      ), new BandeiraModel(
        "Swaziland",
        "+268",
        "SZ"
      ), new BandeiraModel(
        "Sweden",
        "+46",
        "SE"
      ), new BandeiraModel(
        "Switzerland",
        "+41",
        "CH"
      ), new BandeiraModel(
        "Tajikistan",
        "+992",
        "TJ"
      ), new BandeiraModel(
        "Thailand",
        "+66",
        "TH"
      ), new BandeiraModel(
        "Togo",
        "+228",
        "TG"
      ), new BandeiraModel(
        "Tokelau",
        "+690",
        "TK"
      ), new BandeiraModel(
        "Tonga",
        "+676",
        "TO"
      ), new BandeiraModel(
        "Trinidad and Tobago",
        "+1 868",
        "TT"
      ), new BandeiraModel(
        "Tunisia",
        "+216",
        "TN"
      ), new BandeiraModel(
        "Turkey",
        "+90",
        "TR"
      ), new BandeiraModel(
        "Turkmenistan",
        "+993",
        "TM"
      ), new BandeiraModel(
        "Turks and Caicos Islands",
        "+1 649",
        "TC"
      ), new BandeiraModel(
        "Tuvalu",
        "+688",
        "TV"
      ), new BandeiraModel(
        "Uganda",
        "+256",
        "UG"
      ), new BandeiraModel(
        "Ukraine",
        "+380",
        "UA"
      ), new BandeiraModel(
        "United Arab Emirates",
        "+971",
        "AE"
      ), new BandeiraModel(
        "United Kingdom",
        "+44",
        "GB"
      ), new BandeiraModel(
        "Uruguay",
        "+598",
        "UY"
      ), new BandeiraModel(
        "Uzbekistan",
        "+998",
        "UZ"
      ), new BandeiraModel(
        "Vanuatu",
        "+678",
        "VU"
      ), new BandeiraModel(
        "Wallis and Futuna",
        "+681",
        "WF"
      ), new BandeiraModel(
        "Yemen",
        "+967",
        "YE"
      ), new BandeiraModel(
        "Zambia",
        "+260",
        "ZM"
      ), new BandeiraModel(
        "Zimbabwe",
        "+263",
        "ZW"
      ), new BandeiraModel(
        "land Islands",
        "",
        "AX"
      ), new BandeiraModel(
        "Antarctica",
        null,
        "AQ"
      ), new BandeiraModel(
        "Bolivia, Plurinational State of",
        "+591",
        "BO"
      ), new BandeiraModel(
        "Brunei Darussalam",
        "+673",
        "BN"
      ), new BandeiraModel(
        "Cocos (Keeling) Islands",
        "+61",
        "CC"
      ), new BandeiraModel(
        "Congo, The Democratic Republic of the",
        "+243",
        "CD"
      ), new BandeiraModel(
        "Cote d'Ivoire",
        "+225",
        "CI"
      ), new BandeiraModel(
        "Falkland Islands (Malvinas)",
        "+500",
        "FK"
      ), new BandeiraModel(
        "Guernsey",
        "+44",
        "GG"
      ), new BandeiraModel(
        "Holy See (Vatican City State)",
        "+379",
        "VA"
      ), new BandeiraModel(
        "Hong Kong",
        "+852",
        "HK"
      ), new BandeiraModel(
        "Iran, Islamic Republic of",
        "+98",
        "IR"
      ), new BandeiraModel(
        "Isle of Man",
        "+44",
        "IM"
      ), new BandeiraModel(
        "Jersey",
        "+44",
        "JE"
      ), new BandeiraModel(
        "Korea, Democratic People's Republic of",
        "+850",
        "KP"
      ), new BandeiraModel(
        "Korea, Republic of",
        "+82",
        "KR"
      ), new BandeiraModel(
        "Lao People's Democratic Republic",
        "+856",
        "LA"
      ), new BandeiraModel(
        "Libyan Arab Jamahiriya",
        "+218",
        "LY"
      ), new BandeiraModel(
        "Macao",
        "+853",
        "MO"
      ), new BandeiraModel(
        "Macedonia, The Former Yugoslav Republic of",
        "+389",
        "MK"
      ), new BandeiraModel(
        "Micronesia, Federated States of",
        "+691",
        "FM"
      ), new BandeiraModel(
        "Moldova, Republic of",
        "+373",
        "MD"
      ), new BandeiraModel(
        "Mozambique",
        "+258",
        "MZ"
      ), new BandeiraModel(
        "Palestinian Territory, Occupied",
        "+970",
        "PS"
      ), new BandeiraModel(
        "Pitcairn",
        "+872",
        "PN"
      ), new BandeiraModel(
        "Réunion",
        "+262",
        "RE"
      ), new BandeiraModel(
        "Russia",
        "+7",
        "RU"
      ), new BandeiraModel(
        "Saint Barthélemy",
        "+590",
        "BL"
      ), new BandeiraModel(
        "Saint Helena, Ascension and Tristan Da Cunha",
        "+290",
        "SH"
      ), new BandeiraModel(
        "Saint Kitts and Nevis",
        "+1 869",
        "KN"
      ), new BandeiraModel(
        "Saint Lucia",
        "+1 758",
        "LC"
      ), new BandeiraModel(
        "Saint Martin",
        "+590",
        "MF"
      ), new BandeiraModel(
        "Saint Pierre and Miquelon",
        "+508",
        "PM"
      ), new BandeiraModel(
        "Saint Vincent and the Grenadines",
        "+1 784",
        "VC"
      ), new BandeiraModel(
        "Sao Tome and Principe",
        "+239",
        "ST"
      ), new BandeiraModel(
        "Somalia",
        "+252",
        "SO"
      ), new BandeiraModel(
        "Svalbard and Jan Mayen",
        "+47",
        "SJ"
      ), new BandeiraModel(
        "Syrian Arab Republic",
        "+963",
        "SY"
      ), new BandeiraModel(
        "Taiwan, Province of China",
        "+886",
        "TW"
      ), new BandeiraModel(
        "Tanzania, United Republic of",
        "+255",
        "TZ"
      ), new BandeiraModel(
        "Timor-Leste",
        "+670",
        "TL"
      ), new BandeiraModel(
        "Venezuela, Bolivarian Republic of",
        "+58",
        "VE"
      ), new BandeiraModel(
        "Viet Nam",
        "+84",
        "VN"
      ), new BandeiraModel(
        "Virgin Islands, British",
        "+1 284",
        "VG"
      ), new BandeiraModel(
        "Virgin Islands, U.S.",
        "+1 340",
        "VI"
      )
    ];
  }

  public static getBandeiras():Array<BandeiraModel>{
    return this.createBandeiras();
  }

}
