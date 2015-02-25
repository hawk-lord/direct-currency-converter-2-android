/*
 * © 2014-2015 Per Johansson
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Based on code from Simple Currency Converter
 * https://addons.mozilla.org/addon/simple-currency-converter/
 *
 * Module pattern is used.
 */
const PriceRegexes = (function() {
	const makePriceRegexes = function(aRegex1, aRegex2) {
    	const begin = "(^|\\s)";
    	const value = "(\\d{1,3}((,|\\.|\\s)\\d{3})+|(\\d+))((\\.|,)\\d{1,9})?";
    	const space = "\\s?";
    	const end = "(?!\\w)";
    	const makeRegex1 = function(reg) {
    		return RegExp(begin + reg + "(" + space + value + ")", "g");
    	};
    	const makeRegex2 = function(reg) {
    		return RegExp("(" + value + space + ")" + reg + end, "g");
    	};
    	try {
            aRegex1.AED = makeRegex1("(AED|Dhs?)");
            aRegex2.AED = makeRegex2("(AED|Dhs?|dirhams?)");
            aRegex1.AFN = makeRegex1("(AFN|؋|افغانۍ|[aA]fs?)");
            aRegex2.AFN = makeRegex2("(AFN|\\s؋\\s?afs?|afs?|افغانۍ|afghanis?)");
            aRegex1.ALL = makeRegex1("(ALL|Lekë?)");
            aRegex2.ALL = makeRegex2("(ALL|[lL]ekë?|L)");
            aRegex1.AMD = makeRegex1("(AMD|\\u058F|Դրամ|drams?|драм)");
            aRegex2.AMD = makeRegex2("(AMD|\\u058F|Դրամ|drams?|драм)");
            aRegex1.ANG = makeRegex1("(ANG|NAƒ|ƒ|NAf\\.?)");
            aRegex2.ANG = makeRegex2("(ANG|NAƒ|ƒ|NAf\\.?|\\sgulden)");
            aRegex1.AOA = makeRegex1("(AOA|[kK]z)");
            aRegex2.AOA = makeRegex2("(AOA|Kz|kwanzas?)");
            aRegex1.ARS = makeRegex1("(ARS|AR\\$|\\$)");
            aRegex2.ARS = makeRegex2("(ARS|AR\\$|\\$|pesos?)");
            aRegex1.AUD = makeRegex1("(AUD|AUD\\s?\\$|AU\\$|\\$)");
            aRegex2.AUD = makeRegex2("(AUD|AUD\\$|AU\\$|\\$|dollars?)");
            aRegex1.AWG = makeRegex1("(AWG|AWG\\.?Afl\\.?)");
            aRegex2.AWG = makeRegex2("(AWG|[aA]fl\\.?|\\sflorin)");
            aRegex1.AZN = makeRegex1("(AZN|₼)");
            aRegex2.AZN = makeRegex2("(AZN|₼|manat|man\\.?)");
            aRegex1.BAM = makeRegex1("(BAM|KM)");
            aRegex2.BAM = makeRegex2("(BAM|KM)");
            aRegex1.BBD = makeRegex1("(BBD|Bds\\$?|\\$)");
            aRegex2.BBD = makeRegex2("(BBD|\\$|dollars?)");
            aRegex1.BDT = makeRegex1("(BDT|৳|Tk\\.?|Taka)");
            aRegex2.BDT = makeRegex2("(BDT|টাকা|Tk|taka)");
            aRegex1.BGN = makeRegex1("(BGN)");
            aRegex2.BGN = makeRegex2("(BGN|лв\\.?|лева?|lv\\.?|leva?)");
            aRegex1.BHD = makeRegex1("(BHD|دينار|BD\\.?|\\.د\\.ب)");
            aRegex2.BHD = makeRegex2("(BHD|\\.د\\.ب|dinars?|دينار)");
            aRegex1.BIF = makeRegex1("(BIF)");
            aRegex2.BIF = makeRegex2("(BIF|Fbu?|francs|Fr)");
            aRegex1.BMD = makeRegex1("(BMD\\$|BMD|BD\\$?|Bd\\$?|\\$)");
            aRegex2.BMD = makeRegex2("(BMD|\\$|dollars?)");
            aRegex1.BND = makeRegex1("(BND\\$|BND|B\\$|\\$)");
            aRegex2.BND = makeRegex2("(BND|\\$|dollars?)");
            aRegex1.BOB = makeRegex1("(BOB|Bs\\.?)");
            aRegex2.BOB = makeRegex2("(BOB|Bs\\.?|Bolivianos?)");
            aRegex1.BOV = makeRegex1("(BOV)");
            aRegex2.BOV = makeRegex2("(BOV|MVDOL)");
            aRegex1.BRL = makeRegex1("(BRL|R\\$)");
            aRegex2.BRL = makeRegex2("(BRL|R\\$|real|reais)");
            aRegex1.BSD = makeRegex1("(BSD|BSD\\$|B\\$|\\$)");
            aRegex2.BSD = makeRegex2("(BSD|\\$|dollars?)");
            aRegex1.BTN = makeRegex1("(BTN|Nu\\.?)");
            aRegex2.BTN = makeRegex2("(BTN|[nN]gultrum|དངུལ་ཀྲམ)");
            aRegex1.BWP = makeRegex1("(BWP|\\sP)");
            aRegex2.BWP = makeRegex2("(BWP|pula)");
            aRegex1.BYR = makeRegex1("(BYR|Br\\.?|бр\\.?)");
            aRegex2.BYR = makeRegex2("(BYR|Br\\.?|бр\\.?|рубель|рублёў|рублей|rubles?)");
            aRegex1.BZD = makeRegex1("(BZD|BZ\\s?\\$|\\$)");
            aRegex2.BZD = makeRegex2("(BZD|\\$|dollars?)");
            aRegex1.CAD = makeRegex1("(CAD|CAD\\$|C\\$|\\$)");
            aRegex2.CAD = makeRegex2("(CAD|\\$|dollars?)");
            aRegex1.CDF = makeRegex1("(CDF|F[Cc])");
            aRegex2.CDF = makeRegex2("(CDF|F[Cc]|francs)");
            aRegex1.CHE = makeRegex1("(CHE)");
            aRegex2.CHE = makeRegex2("(CHE)");
            aRegex1.CHF = makeRegex1("(CHF|Fr\\.)(\\s?(\\d{1,3}(('|,|\\.|\\s)\\d{3})+|(\\d+))((\\.|,)\\d{1,9})?)");
            aRegex2.CHF = RegExp("((\\d{1,3}(('|,|\\.|\\s)\\d{3})+|(\\d+))((\\.|,)\\d{1,9})?\\s?)(CHF|Fr\\.|Franken)" + end, "g");
            aRegex1.CHW = makeRegex1("(CHW)");
            aRegex2.CHW = makeRegex2("(CHW)");
            aRegex1.CLF = makeRegex1("(CLF|UF)");
            aRegex2.CLF = makeRegex2("(CLF|U\\.?F\\.?|Unidades de Fomentos)");
            aRegex1.CLP = makeRegex1("(CLP|\\$)");
            aRegex2.CLP = makeRegex2("(CLP|[Pp]esos?)");
            aRegex1.CNY = makeRegex1("(CNY|¥|[yY]u[áa]n|[rR]enminbi|RMB)");
            aRegex2.CNY = makeRegex2("(CNY|¥|[yY]u[áa]n|[rR]enminbi|RMB)");
            aRegex1.COP = makeRegex1("(COP|COP\\s?\\$|COL\\$|Col\\$|CO\\$|\\$)");
            aRegex2.COP = makeRegex2("(COP|pesos?)");
            aRegex1.COU = makeRegex1("(COU)");
            aRegex2.COU = makeRegex2("(COU|UVR|Unidades de Valor Real)");
            aRegex1.CRC = makeRegex1("(CRC|₡)");
            aRegex2.CRC = makeRegex2("(CRC|[cC]ol[oó]n(es))");
            aRegex1.CUC = makeRegex1("(CUC|CUC\\s?\\$|\\$)");
            aRegex2.CUC = makeRegex2("(CUC|[pP]esos [cC]onvertibles)");
            aRegex1.CUP = makeRegex1("(CUP|CUP\\s?\\$|MN\\$|\\$)");
            aRegex2.CUP = makeRegex2("(CUP|[pP]esos?)");
            aRegex1.CVE = makeRegex1("(CVE)");
            aRegex2.CVE = makeRegex2("(CVE|\\$|ESC(UDOS)?|Esc(udos)?|esc(udos)?)");
            aRegex1.CZK = makeRegex1("(CZK)");
            aRegex2.CZK = makeRegex2("(CZK|Kč|koruna?y?)");
            aRegex1.DJF = makeRegex1("(DJF)");
            aRegex2.DJF = makeRegex2("(DJF|[Ff][Dd][Jj]|francs?)");
            aRegex1.DKK = makeRegex1("(DKK|kr|kr\\.|dkr)");
            aRegex2.DKK = makeRegex2("(DKK|mio\\. kroner|million(er)? kroner|mia\\. kroner|kroner|s?mia\\. krónur|milliard(ir)? krónur?|s?mio\\. krónur|millión(ir)? krónur?|miljón(ir)? krónur?|krónur?|kr|dkr|:-|,-)");
            aRegex1.DOP = makeRegex1("(DOP|DOP\\s?\\$|RD\\$|\\$)");
            aRegex2.DOP = makeRegex2("(DOP|pesos?)");
            aRegex1.DZD = makeRegex1("(DZD|دج|DA)");
            aRegex2.DZD = makeRegex2("(DZD|دج|DA|dinars?)");
            aRegex1.EGP = makeRegex1("(EGP|L\\.?E\\.?\\s?|E£|ج\\.م)");
            aRegex2.EGP = makeRegex2("(EGP|L\\.?E|EGL|E£|ج\\.م|pounds?)");
            aRegex1.ERN = makeRegex1("(ERN|Nkf|Nfk|NFA|ናቕፋ)");
            aRegex2.ERN = makeRegex2("(ERN|Nkf|Nfk|ናቕፋ|[nN]akfa)");
            aRegex1.ETB = makeRegex1("(ETB|Br\\.?|ብር|Birr)");
            aRegex2.ETB = makeRegex2("(ETB|Br|ብር|[bB]irr)");
            aRegex1.EUR = makeRegex1("(EUR|€|euro)");
            aRegex2.EUR = makeRegex2("(EUR|€|euro)");
            aRegex1.FJD = makeRegex1("(FJD|FJ\\$?|\\$)");
            aRegex2.FJD = makeRegex2("(FJD|\\$|dollars?)");
            aRegex1.FKP = makeRegex1("(FKP|FK£|£)");
            aRegex2.FKP = makeRegex2("(FKP|pounds?)");
            aRegex1.GBP = makeRegex1("(GBP|£)");
            aRegex2.GBP = makeRegex2("(GBP|£|pounds?)");
            aRegex1.GEL = makeRegex1("(GEL)");
            aRegex2.GEL = makeRegex2("(GEL|ლარი|lari)");
            aRegex1.GHS = makeRegex1("(GHS|GH₵|GH¢|GH[cC])");
            aRegex2.GHS = makeRegex2("(GHS|GH₵|cedi)");
            aRegex1.GIP = makeRegex1("(GIP|£)");
            aRegex2.GIP = makeRegex2("(GIP|pounds?)");
            aRegex1.GMD = makeRegex1("(GMD|D)");
            aRegex2.GMD = makeRegex2("(GMD|Dalasis?)");
            aRegex1.GNF = makeRegex1("(GNF)");
            aRegex2.GNF = makeRegex2("(GNF|FG|fg|francs?)");
            aRegex1.GTQ = makeRegex1("(GTQ|Q\\.?)");
            aRegex2.GTQ = makeRegex2("(GTQ|Q|quetzal(es)?|q)");
            aRegex1.GYD = makeRegex1("(GYD|GYD\\$|G\\$|\\$)");
            aRegex2.GYD = makeRegex2("(GYD|\\$|dollars?)");
            aRegex1.HKD = makeRegex1("(HKD|HK\\$|\\$)");
            aRegex2.HKD = makeRegex2("(HKD|\\$|dollars?)");
            aRegex1.HNL = makeRegex1("(HNL|L\\.?)");
            aRegex2.HNL = makeRegex2("(HNL|lempiras?)");
            aRegex1.HRK = makeRegex1("(HRK)");
            aRegex2.HRK = makeRegex2("(HRK|kn|kuna)");
            aRegex1.HTG = makeRegex1("(HTG)");
            aRegex2.HTG = makeRegex2("(HTG|[gG]ourdes?|G)");
            aRegex1.HUF = makeRegex1("(HUF)");
            aRegex2.HUF = makeRegex2("(HUF|Ft|forint)");
            aRegex1.IDR = makeRegex1("(IDR|Rp\\.?)");
            aRegex2.IDR = makeRegex2("(IDR|[rR]upiah)");
            aRegex1.ILS = makeRegex1("(ILS|NIS|₪|שֶׁקֶל)");
            aRegex2.ILS = makeRegex2("(ILS|NIS|₪|שֶׁקֶל|shekel)");
            aRegex1.INR = makeRegex1("(INR|₹|₨|Rs\\.?|रु\\.?|ரூ\\.?)");
            aRegex2.INR = makeRegex2("(INR|Rs\\.?|rupees)");
            aRegex1.IQD = makeRegex1("(IQD|دينار|د\\.ع)");
            aRegex2.IQD = makeRegex2("(IQD|دينار|د\\.ع|dinars?)");
            aRegex1.IRR = makeRegex1("(IRR|ریال|﷼)");
            aRegex2.IRR = makeRegex2("(IRR|ریال|﷼|[rR]ials?)");
            aRegex1.ISK = makeRegex1("(ISK|kr|iskr)");
            aRegex2.ISK = makeRegex2("(ISK|milljarð(ar?)?(ur)? króna|milljón(a)?(ir)?(um)? króna|þúsund króna?(ur)?|króna?(ur)?|kr|iskr|:-|,-)");
            aRegex1.JMD = makeRegex1("(JMD|JMD\\$|J\\$|\\$)");
            aRegex2.JMD = makeRegex2("(JMD|\\$|dollars?)");
            aRegex1.JOD = makeRegex1("(JOD|دينار|JD\\.?)");
            aRegex2.JOD = makeRegex2("(JOD|JD|dinars?|دينار)");
            aRegex1.JPY = makeRegex1("(JPY|¥|￥|yen|円|圓)");
            aRegex2.JPY = makeRegex2("(JPY|¥|￥|yen|円|圓)");
            aRegex1.KES = makeRegex1("(KES|Kshs?\\.?|KSh|KSH)");
            aRegex2.KES = makeRegex2("(KES|ksh|Shillings?)");
            aRegex1.KGS = makeRegex1("(KGS)");
            aRegex2.KGS = makeRegex2("(KGS|soms?|сом)");
            aRegex1.KHR = makeRegex1("(KHR|៛|រៀល)");
            aRegex2.KHR = makeRegex2("(KHR|៛|រៀល|[rR]iels?)");
            aRegex1.KMF = makeRegex1("(KMF)");
            aRegex2.KMF = makeRegex2("(KMF|[fF][cC]|francs?)");
            aRegex1.KPW = makeRegex1("(KPW|₩|￦|원)");
            aRegex2.KPW = makeRegex2("(KPW|₩|￦|원|wons?)");
            aRegex1.KRW = makeRegex1("(KRW|₩|￦|원)");
            aRegex2.KRW = makeRegex2("(KRW|₩|￦|원|wons?)");
            aRegex1.KWD = makeRegex1("(KWD|دينار|K\\.?D\\.?\\.?|\\.د\\.ب)");
            aRegex2.KWD = makeRegex2("(KWD|K\\.?D\\.?|\\.د\\.ب|dinars?|دينار)");
            aRegex1.KYD = makeRegex1("(KYD|KYD\\$?|CI\\$|\\$)");
            aRegex2.KYD = makeRegex2("(KYD)");
            aRegex1.KZT = makeRegex1("(KZT|₸)");
            aRegex2.KZT = makeRegex2("(KZT|₸|tenge|теңге)");
            aRegex1.LAK = makeRegex1("(LAK|ກີ|₭N?|KIP)");
            aRegex2.LAK = makeRegex2("(LAK|ກີ|₭N?|[kK]ip|KIP)");
            aRegex1.LBP = makeRegex1("(LBP|L\\.L\\.?|ل\\.ل\\.|ليرات)");
            aRegex2.LBP = makeRegex2("(LBP|Lebanese [pP]ounds?|L\\.L\\.?|ل\\.ل\\.|ليرات)");
            aRegex1.LKR = makeRegex1("(LKR|රු|₨\\.?|SLRs\\.?|Rs\\.?|ரூபாய்\\.?|රුපියල්\\.?)");
            aRegex2.LKR = makeRegex2("(LKR|Rs\\.?|rupees|ரூபாய்)");
            aRegex1.LRD = makeRegex1("(LRD|LD\\$?|L\\$|\\$)");
            aRegex2.LRD = makeRegex2("(LRD|\\$|dollars?)");
            aRegex1.LSL = makeRegex1("(LSL|Maloti|M|Loti)");
            aRegex2.LSL = makeRegex2("(LSL|Maloti|LOTI)");
            aRegex1.LTL = makeRegex1("(LTL)");
            aRegex2.LTL = makeRegex2("(LTL|Lt|litai|litų)");
            aRegex1.LYD = makeRegex1("(LYD|L\\.?D\\.?|ل\\.د|دينار)");
            aRegex2.LYD = makeRegex2("(LYD|L\\.?D\\.?|ل\\.د|دينار|dinars?)");
            aRegex1.MAD = makeRegex1("(MAD|د\\.م\\.|دراهم)");
            aRegex2.MAD = makeRegex2("(MAD|د\\.م\\.|دراهم|dhs|Dh\\.?|dirhams?)");
            aRegex1.MDL = makeRegex1("(MDL)");
            aRegex2.MDL = makeRegex2("(MDL|leu|lei|лей|леев)");
            aRegex1.MGA = makeRegex1("(MGA|Ar)");
            aRegex2.MGA = makeRegex2("(MGA|[aA]riary|[aA]r)");
            aRegex1.MKD = makeRegex1("(MKD)");
            aRegex2.MKD = makeRegex2("(MKD|денари?|ден|den(ari?)?)");
            aRegex1.MMK = makeRegex1("(MMK|[kK][sS]|[kK]yat)");
            aRegex2.MMK = makeRegex2("(MMK|[kK][sS]|[kK]yat|ကျပ်)");
            aRegex1.MNT = makeRegex1("(MNT|₮)");
            aRegex2.MNT = makeRegex2("(MNT|₮|ᠲᠥᠭᠦᠷᠢᠭ|төгрөг|tögrögs?|tugrik)");
            aRegex1.MOP = makeRegex1("(MOP|MOP\\s?\\$|\\$)");
            aRegex2.MOP = makeRegex2("(MOP|MOP\\$|澳門圓|澳门圆|[pP]atacas?)");
            aRegex1.MRO = makeRegex1("(MRO|أوقية)");
            aRegex2.MRO = makeRegex2("(MRO|أوقية|ouguiya|um|UM)");
            aRegex1.MUR = makeRegex1("(MUR|₨\\.?|[rR]s)");
            aRegex2.MUR = makeRegex2("(MUR|[rR]upees?|[rR]oupies?|[rR]s)");
            aRegex1.MVR = makeRegex1("(MVR|MRF\\.?|MRf\\.?|Mrf\\.?|Rf\\.?|RF\\.?|Rufiyaa)");
            aRegex2.MVR = makeRegex2("(MVR|mrf|Rufiyaa)");
            aRegex1.MWK = makeRegex1("(MWK|MwK|Mwk|M?K)");
            aRegex2.MWK = makeRegex2("(MWK|MK|[kK]wacha)");
            aRegex1.MXN = makeRegex1("(MXN|MEX\\$|Mex\\$|\\$)");
            aRegex2.MXN = makeRegex2("(MXN|MEX\\$|Mex\\$|[pP]esos?)");
            aRegex1.MXV = makeRegex1("(MXV)");
            aRegex2.MXV = makeRegex2("(MXV|UDIS?|[uU]nidades de Inversión|UNIDADES DE INVERSIÓN)");
            aRegex1.MYR = makeRegex1("(MYR|RM)");
            aRegex2.MYR = makeRegex2("(MYR|[rR]inggit)");
            aRegex1.MZN = makeRegex1("(MZN)");
            aRegex2.MZN = makeRegex2("(MZN|MTn|[mM]etical|[mM]eticais)");
            aRegex1.NAD = makeRegex1("(NAD|N?\\$)");
            aRegex2.NAD = makeRegex2("(NAD|dollars?)");
            aRegex1.NGN = makeRegex1("(NGN|₦|N)");
            aRegex2.NGN = makeRegex2("(NGN|[nN]aira)");
            aRegex1.NIO = makeRegex1("(NIO|C?\\$)");
            aRegex2.NIO = makeRegex2("(NIO|córdoba)");
            aRegex1.NOK = makeRegex1("(NOK|kr\\.?|NKR\\.?|NKr\\.?|Nkr\\.?|nkr\\.?)");
            aRegex2.NOK = makeRegex2("(NOK|milliard(er)? kroner|million(er)? kroner|kroner|kr\\.?|NKR|NKr|Nkr|nkr|:-|,-)");
            aRegex1.NPR = makeRegex1("(NPR|N?Rs\\.?|रू)");
            aRegex2.NPR = makeRegex2("(NPR|rupees?|रूपैयाँ)");
            aRegex1.NZD = makeRegex1("(NZD|NZ\\s?\\$|\\$)");
            aRegex2.NZD = makeRegex2("(NZD|[dD]ollars?)");
            aRegex1.OMR = makeRegex1("(OMR|ر\\.ع\\.|ر\\.ع|ريال‎|[rR]ials?|R\\.?O\\.?)");
            aRegex2.OMR = makeRegex2("(OMR|ريال عماني|ر\\.ع\\.|ر\\.ع|ريال‎|Omani [rR]ials?|[rR]ials?)");
            aRegex1.PAB = makeRegex1("(PAB|B\\/\\.?)");
            aRegex2.PAB = makeRegex2("(PAB|[bB]alboa)");
            aRegex1.PEN = makeRegex1("(PEN|S\\/\\.?)");
            aRegex2.PEN = makeRegex2("(PEN|SOL|Sol(es)?|sol(es)?)");
            aRegex1.PGK = makeRegex1("(PGK|K)");
            aRegex2.PGK = makeRegex2("(PGK|[kK]ina)");
            aRegex1.PHP = makeRegex1("(PHP|₱|PhP|Php|P)");
            aRegex2.PHP = makeRegex2("(PHP|[pP]esos)");
            aRegex1.PKR = makeRegex1("(PKR|₨\\.?|Rs\\.?|روپیہ)");
            aRegex2.PKR = makeRegex2("(PKR|[rR]upees?|روپیہ)");
            aRegex1.PLN = makeRegex1("(PLN|zł)");
            aRegex2.PLN = makeRegex2("(PLN|zł|złoty|zlotys?)");
            aRegex1.PYG = makeRegex1("(PYG|₲|Gs?\\.?)");
            aRegex2.PYG = makeRegex2("(PYG|[gG]s\\.?|guaraní(es)?)");
            aRegex1.QAR = makeRegex1("(QAR|QR\\.?|ريال|ر\\.ق)");
            aRegex2.QAR = makeRegex2("(QAR|[rR]iyals?|ريال|ر\\.ق)");
            aRegex1.RON = makeRegex1("(RON)");
            aRegex2.RON = makeRegex2("(RON|[lL]eu|[lL]ei)");
            aRegex1.RSD = makeRegex1("(RSD)");
            aRegex2.RSD = makeRegex2("(RSD|РСД|dinars?|din\\.?|динара?|дин\\.?)");
            aRegex1.RUB = makeRegex1("(RUB|₽)");
            aRegex2.RUB = makeRegex2("(RUB|₽|рублей|рубль|руб\\.?|[рP]\\.|[rR]o?ubles?|rub\\.?)");
            aRegex1.RWF = makeRegex1("(RWF|RwF|Rwf)");
            aRegex2.RWF = makeRegex2("(RWF|Rwf|Rwandan [fF]rancs?|[fF]rancs?)");
            aRegex1.SAR = makeRegex1("(SAR|SR|﷼|ريال|ر\\.س)");
            aRegex2.SAR = makeRegex2("(SAR|SR|﷼|ريال|ر\\.س|Saudi [rR]iyals?|[rR]iyals?)");
            aRegex1.SBD = makeRegex1("(SBD\\.?\\$?|SI\\$|\\$)");
            aRegex2.SBD = makeRegex2("(SBD|\\$|dollars?)");
            aRegex1.SCR = makeRegex1("(SCR|SR|Sr\\.?)");
            aRegex2.SCR = makeRegex2("(SCR|[rR]upees?|[rR]oupies?)");
            aRegex1.SDG = makeRegex1("(SDG|جنيه)");
            aRegex2.SDG = makeRegex2("(SDG|جنيه|Sudanese [pP]ounds?|[pP]ounds?)");
            aRegex1.SEK = makeRegex1("(SEK|kr|skr)(\\s?(\\d{1,3}((,|\\.|\\s)\\d{3})+|(\\d+))((\\.|,|:)\\d{1,9})?)");
            aRegex2.SEK = RegExp("((\\d{1,3}((,|\\.|\\s)\\d{3})+|(\\d+))((\\.|,|:)\\d{1,9})?\\s?)(SEK|öre|(svenska\\s)?kronor|miljon(er)? kronor|miljard(er)? kronor|mnkr|mdkr|mkr|s?[kK]r|kSEK|MSEK|GSEK|:-|,-)" + end, "g");
            aRegex1.SGD = makeRegex1("(SGD|SGD\\s?\\$?|S?\\$)");
            aRegex2.SGD = makeRegex2("(SGD|(Singapore)?\\s?[dD]ollars?)");
            aRegex1.SHP = makeRegex1("(SHP|£)");
            aRegex2.SHP = makeRegex2("(SHP|pounds?)");
            aRegex1.SLL = makeRegex1("(SLL|L[eE]\\.?)");
            aRegex2.SLL = makeRegex2("(SLL|[lL]eone)");
            aRegex1.SOS = makeRegex1("(SOS)");
            aRegex2.SOS = makeRegex2("(SOS|Sh\\.?\\s?So\\.?|[sS]hillings?)");
            aRegex1.SRD = makeRegex1("(SRD|\\$)");
            aRegex2.SRD = makeRegex2("(SRD|[dD]ollars?)");
            aRegex1.SSP = makeRegex1("(SSP)");
            aRegex2.SSP = makeRegex2("(SSP|pounds?)");
            aRegex1.STD = makeRegex1("(STD|Dbs?\\.?)");
            aRegex2.STD = makeRegex2("(STD|dbs|[dD]obra)");
            aRegex1.SVC = makeRegex1("(SVC|₡|¢)");
            aRegex2.SVC = makeRegex2("(SVC|svc|[cC]ol[oó]n(es)?)");
            aRegex1.SYP = makeRegex1("(SYP|S\\.?P\\.?|ليرة)");
            aRegex2.SYP = makeRegex2("(SYP|S\\.?P\\.?|(de )?L\\.?S\\.?|(Syrian )?[pP]ounds?|[lL]ivres? [sS]yriennes?|[lL]ivres?|ليرة)");
            aRegex1.SZL = makeRegex1("(SZL|[eE]malangeni|E)");
            aRegex2.SZL = makeRegex2("(SZL|Lilangeni)");
            aRegex1.THB = makeRegex1("(THB|฿)");
            aRegex2.THB = makeRegex2("(THB|(Thai )?[bB]aht|บาท)");
            aRegex1.TJS = makeRegex1("(TJS|سامانی)");
            aRegex2.TJS = makeRegex2("(TJS|[sS]omoni|cомонӣ)");
            aRegex1.TMT = makeRegex1("(TMT)");
            aRegex2.TMT = makeRegex2("(TMT|[mM]anat|манат)");
            aRegex1.TND = makeRegex1("(TND)");
            aRegex2.TND = makeRegex2("(TND|DT|[dD][tT]|[dD]inars?|د\\.ت|دينار)");
            aRegex1.TOP = makeRegex1("(TOP|TOP\\$|T?\\$)");
            aRegex2.TOP = makeRegex2("(TOP|[pP]a'anga)");
            aRegex1.TRY = makeRegex1("(TRY|₺|TL)");
            aRegex2.TRY = makeRegex2("(TRY|[lL]ira|TL)");
            aRegex1.TTD = makeRegex1("(TTD|TTD\\$?|TT\\$|\\$)");
            aRegex2.TTD = makeRegex2("(TTD|dollars?)");
            aRegex1.TWD = makeRegex1("(TWD|NT\\$|\\$)");
            aRegex2.TWD = makeRegex2("(TWD|NTD|dollars?)");
            aRegex1.TZS = makeRegex1("(TZS|TZs|Tsh\\.?)");
            aRegex2.TZS = makeRegex2("(TZS|TSH|Tsh|(Tanzanian )?[sS]hillings?)");
            aRegex1.UAH = makeRegex1("(UAH|₴)");
            aRegex2.UAH = makeRegex2("(UAH|[hH]rn\\.?|грн\\.?|[hH]ryvnia?|[hH]ryven|гривна|гривня|гривні|гривень)");
            aRegex1.UGX = makeRegex1("(UGX|USH\\.?|USh\\.?|Ush\\.?|[sS]hillings)");
            aRegex2.UGX = makeRegex2("(UGX|USh|(Ugandan? )?[sS]hillings?)");
            aRegex1.USD = makeRegex1("(USD|USD\\s?\\$?|US\\s?\\$|Us\\s?\\$|\\$|\\$USD|U\\$S)");
            aRegex2.USD = makeRegex2("(USD|US\\s?\\$|Us\\s?\\$|\\$|[dD]ollars?)");
            aRegex1.USN = makeRegex1("(USN)");
            aRegex2.USN = makeRegex2("(USN)");
            aRegex1.UYI = makeRegex1("(UYI)");
            aRegex2.UYI = makeRegex2("(UYI|U\\.?I\\.?|[uU]nidades [iI]ndexadas)");
            aRegex1.UYU = makeRegex1("(UYU|\\$U|\\$)");
            aRegex2.UYU = makeRegex2("(UYU|\\$U|[pP]esos?)");
            aRegex1.UZS = makeRegex1("(UZS)");
            aRegex2.UZS = makeRegex2("(UZS|uzs|som|сўм|сум)");
            aRegex1.VEF = makeRegex1("(VEF|[bB]s\\.?[fF]?\\.?)");
            aRegex2.VEF = makeRegex2("(VEF|[bB]s\\.?[fF]?|[bB]olívar(es)?)");
            aRegex1.VND = makeRegex1("(VND|₫)");
            aRegex2.VND = makeRegex2("(VND|vnd|₫|[dD]ong|đồng|đ|ĐỒNG|Đ)");
            aRegex1.VUV = makeRegex1("(VUV|VT|Vt)");
            aRegex2.VUV = makeRegex2("(VUV|VT|vt|[vV]atu)");
            aRegex1.WST = makeRegex1("(WST|WST\\$?|WS\\$|\\$|SAT\\$?|ST\\$)");
            aRegex2.WST = makeRegex2("(WST|WST\\$?|[tT]ālā|[tT]ala)");
            aRegex1.XAF = makeRegex1("(XAF|FCFA|CFA)");
            aRegex2.XAF = makeRegex2("(XAF|FCFA|Fcfa|cfa|CFA [fF]rancs?|[fF]rancs?|[fF])");
            aRegex1.XAG = makeRegex1("(XAG)");
            aRegex2.XAG = makeRegex2("(XAG)");
            aRegex1.XAU = makeRegex1("(XAU)");
            aRegex2.XAU = makeRegex2("(XAU)");
            aRegex1.XBA = makeRegex1("(XBA)");
            aRegex2.XBA = makeRegex2("(XBA)");
            aRegex1.XBB = makeRegex1("(XBB)");
            aRegex2.XBB = makeRegex2("(XBB)");
            aRegex1.XBC = makeRegex1("(XBC)");
            aRegex2.XBC = makeRegex2("(XBC)");
            aRegex1.XBD = makeRegex1("(XBD)");
            aRegex2.XBD = makeRegex2("(XBD)");
            aRegex1.XCD = makeRegex1("(XCD|ECD?\\s?\\$|\\$)");
            aRegex2.XCD = makeRegex2("(XCD|ECD|[dD]ollars?)");
            aRegex1.XDR = makeRegex1("(XDR|SDR)");
            aRegex2.XDR = makeRegex2("(XDR|SDRs?|[sS]pecial [dD]rawing [rR]ights)");
            aRegex1.XOF = makeRegex1("(XOF|FCFA|CFA)");
            aRegex2.XOF = makeRegex2("(XOF|xof|FCFA|Fcfa|CFA [fF]rancs?|Frs CFA|CFA|cfa|[fF]rancos?|[fF]rancs?|[fF]rancos?|[fF])");
            aRegex1.XPD = makeRegex1("(XPD)");
            aRegex2.XPD = makeRegex2("(XPD)");
            aRegex1.XPF = makeRegex1("(XPF)");
            aRegex2.XPF = makeRegex2("(XPF|CFP|cfp|[fF]\\s?(cfp)|(CFP)|[fF]rcs CFP|[fF]rcs|[fF]rancs?|[fF])");
            aRegex1.XPT = makeRegex1("(XPT)");
            aRegex2.XPT = makeRegex2("(XPT)");
            aRegex1.XSU = makeRegex1("(XSU)");
            aRegex2.XSU = makeRegex2("(XSU)");
            aRegex1.XTS = makeRegex1("(XTS)");
            aRegex2.XTS = makeRegex2("(XTS)");
            aRegex1.XUA = makeRegex1("(XUA)");
            aRegex2.XUA = makeRegex2("(XUA)");
            aRegex1.XXX = makeRegex1("(XXX)");
            aRegex2.XXX = makeRegex2("(XXX)");
            aRegex1.YER = makeRegex1("(YER|Y\\.?R\\.?|﷼|ريال)");
            aRegex2.YER = makeRegex2("(YER|Y\\.?R\\.?|[rR]iy?als?|﷼|ريال)");
            aRegex1.ZAR = makeRegex1("(ZAR|R)");
            aRegex2.ZAR = makeRegex2("(ZAR|[rR]ands?)");
            aRegex1.ZMW = makeRegex1("(ZMW|Zmk|K)");
            aRegex2.ZMW = makeRegex2("(ZMW|[kK]wacha)");
            aRegex1.ZWL = makeRegex1("(ZWL|Z\\$)");
            aRegex2.ZWL = makeRegex2("(ZWL)");
            aRegex1.inch = /NOMATCH(?!\w)/g;
            aRegex2.inch = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)(\s?tum|-tums?|\s?"|\s?″)(?!\w)/g;
            aRegex1.kcal = /NOMATCH(?!\w)/g;
            aRegex2.kcal = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)(\s?kcal|\s?kalorier)(?!\w)/g;
            aRegex1.nmi = /NOMATCH(?!\w)/g;
            aRegex2.nmi = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)(\s?sjömil|\s?nautiska mil?|\s?nautical miles?)(?!\w)/g;
            aRegex1.mile = /NOMATCH(?!\w)/g;
            aRegex2.mile = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)(\s?mile|\s?miles)(?!\w)/g;
            aRegex1.mil = /NOMATCH(?!\w)/g;
            aRegex2.mil = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)(\s?mil)(?!\w)/g;
            aRegex1.knots = /NOMATCH(?!\w)/g;
            aRegex2.knots = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)(\s?knop)(?!\w)/g;
            aRegex1.hp = /NOMATCH(?!\w)/g;
            aRegex2.hp = /((\d{1,3}((,|\.|\s)\d{3})+|(\d+))((\.|,)\d{1,9})?)(\s?hästkrafter|\s?hkr?|\s?hp)(?!\w)/g;
        }
        catch(err) {
        	console.error(err);
        }
    };
    return {
        makePriceRegexes : makePriceRegexes
    };
})();
