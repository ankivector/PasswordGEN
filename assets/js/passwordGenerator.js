﻿document.getElementById("btngen").addEventListener("click", funGeneratePassword);
document.getElementById("btncopy").addEventListener("click", funCopyPassword);

// Display a password when webpage is opened
window.onload = function() {
	document.getElementById("pwLength").value = funGetRandomNo(20,50);
    funGeneratePassword();
};

// Clean code
"use strict";
var setUnique = "";

function funCopyPassword() {
	var range = document.createRange();
	range.selectNode(document.getElementById("shgenpw"));
	window.getSelection().removeAllRanges(); // clear current selection
	window.getSelection().addRange(range); // to select text
	document.execCommand("copy");
	window.getSelection().removeAllRanges();// to deselect
}

//// Copied from here: https://codepen.io/shaikmaqsood/pen/XmydxJ
// function copyPassword(element) {
    // var $temp = $("<input>");
    // $("body").append($temp);
    // $temp.val($(element).text()).select();
    // document.execCommand("copy");
    // $temp.remove();
// }

function funCharacterSet(){
	setUnique += "HFJMMM<,jhfkl";
	setUnique += "hfkhHMGJ><M>2546*&";
	setUnique += "j.kHFJHBLOjgl2435&%**";
	setUnique += "hkgjvf.;'254*(&(jhf";
	setUnique += "hkjlh25454GF7808";
	setUnique += "254HJGJg546jhHK";
	setUnique += "DHFHGHjhfjhg442432&(";
	setUnique += "fjdj,k.kJHKUUI37(*(*^$%&";
	setUnique += "f,jgdfjhxbu477$#((";
	setUnique += "dfjkoriougFDHGGJ1338jhg";
	setUnique += "kjfjkuflkf'KJHIUYUJ54%^$&^(*";
	setUnique += "˩˪˫ˬ˭ˮ˯˰˱˲˳˴˵˶˷˸˹˺˻˼˽˾˿̡̛̘̙̜̝̞̟̠̀́̂̃̄̆̇̈̉̊̋̌̍̎̏̐̕̚";
	setUnique += "ͣͤͥͦͧͨͩͪͫͬͭͮͯ͜͟͢͝͞͠͡ͰͱͲͳʹ͵Ͷͷͺͻͼͽ;΄Ά·ΈΉΊΌΎΏΐΕΘΙΚΛΜΝ";
	setUnique += "ΞΟΠΡΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστφχψωϊϋόύώϏϐϕ";
	setUnique += "ϘϙϚϛϜϝϞϟϠϡϢϣϤϥϦϧϨϩϪϫϬϭϮϯϰϱϲϳϴϵ϶ϷϸϹϺϻϼϽϾϿրցւփքֆև։֊ִ";
	setUnique += "ַָּֿאוטיךכלםמןנסעףפץצקרשת؋،؍؎؏ؐؕ؛؞؟ءآأؤإئابةتثجحخد";
	setUnique += "ذرزسشصضطظعغفقكلنهوىيًٌٍَُِٕٜ٘ٙٚٛٝٞ٠١٢٣٤٥٦٧٨٩٪٫٬٭ٮٯ";
	setUnique += "ٰٱٲٳٴٵٶٷٸٹٺٻټٽپٿڀځڂڃڄچڇڈډڊڋڌڍڎڏڐڕژڙښڛڜڝڞڟڠڡڢڣڤڥڦڧڨ";
	setUnique += "کڪګڬڭڮگڰڱڲڳڴڵڶڷڸڹںڻڼڽھڿۀہۂۃۄۆۇۈۉۊۋیۍێۏېەۘۙۚۛۜ۞۟۠ۡۢ";
	setUnique += "ۣۤۥۦۧۨ۩۪ۭ۫۬ۮۯ۰۱۲۳۴۵۶۷۸۹ۺۻۼ۽۾ۿ܀܁܂܃܄܆܇܈܉܊܋܌܍ܐܕܘܙܚܛܜܝ";
	setUnique += "ܞܟܠܡܢܣܤܥܦܧܨܩܪܫܬܭܮܯܱܴܷܸܹܻܼܾ݂݄݆݈ܰܲܳܵܶܺܽܿ݀݁݃݇݉݊ݍݎݏݐݕݘ";
	setUnique += "ݙݚݛݜݝݞݟݠݡݢݣݤݥݦݧݨݩݪݫݬݭހށނރބކއވމފދތލގޏސޕޘޙޚޛޜޝޞޟޠޡޢޣ";
	setUnique += "ޤޥަާިީުޫެޭޮޯްޱँंःऄआइईउऊऋऌऍऎएऐकघङचछजझञटठडढणतथदधनऩपफ";
	setUnique += "बभमयरऱलळऴवशषसह़ऽािीुूृॄॆेैॉॊोौ्ॐक़ख़ग़ज़ड़ढ़फ़य़ॠॡॢॣ।॥०१२३";
	setUnique += "४५६७८९॰ॽঁংঃআইঈউঊঋঌএঐকঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহ";
	setUnique += "়ঽািীুূৃৄেৈোৌ্ৎড়ঢ়য়ৠৡৢৣ০১২৩৪৫৬৭৮৯ৰৱ৲৳৴৵৶৷৸৹৺ਁਂਃਆਇਈਉ";
	setUnique += "ਊਏਐਕਘਙਚਛਜਝਞਟਠਡਢਣਤਥਦਧਨਪਫਬਭਮਯਰਲਲ਼ਵਸ਼ਸਹ਼ਾਿੀੁੂੇੈੋੌ੍ਖ਼ਗ਼ਜ਼ੜਫ਼";
	setUnique += "੦੧੨੩੪੫੬੭੮੯ੰੱੲੳੴઁંઃઆઇઈઉઊઋઌઍએઐકઘઙચછજઝઞટઠડઢણતથદધનપફબભ";
	setUnique += "મયરલળવશષસહ઼ઽાિીુૂૃૄેૈૉોૌ્ૐૠૡૢૣ૦૧૨૩૪૫૬૭૮૯૱ଁଂଃଆଇଈଉଊଋ";
	setUnique += "ଌଏଐକଘଙଚଛଜଝଞଟଠଡଢଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହ଼ଽାିୀୁୂୃେୈୋୌ୍ଡ଼ଢ଼";
	setUnique += "ୟୠୡ୦୧୨୩୪୫୬୭୮୯୰ୱஂஃஆஇஈஉஊஎஏஐகஙசஜஞடணதநனபமயரறலளழவஶஷஸஹாி";
	setUnique += "ீுூெேைொோௌ்௦௧௨௩௪௫௬௭௮௯௰௱௲௳௴௵௶௷௸௹௺ఁంఃఆఇఈఉఊఋఌఎఏఐకఘఙచఛజ";
	setUnique += "ఝఞటఠడఢణతథదధనపఫబభమయరఱలళవశషసహాిీుూృౄెేైొోౌ్ౕౠౡ౦౧౨౩౪౫";
	setUnique += "౬౭౮౯ಂಃಆಇಈಉಊಋಌಎಏಐಕಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಱಲಳವಶಷಸಹ಼";
	setUnique += "ಽಾಿೀುೂೃೄೆೇೈೊೋೌ್ೕೞೠೡ೦೧೨೩೪೫೬೭೮೯ംഃആഇഈഉഊഋഌഎഏഐകഘങചഛജഝഞട";
	setUnique += "ഠഡഢണതഥദധനപഫബഭമയരറലളഴവശഷസഹാിീുൂൃെേൈൊോൌ്ൠൡ൦൧൨൩൪൫൬൭൮൯";
	setUnique += "ൺൻർൽൾංඃආඇඈඉඊඋඌඍඎඏඐඕකඛගඞඟචඡජඣඤඥඦටඨඩඪණඬතථදධනඳපඵබභමඹ";
	setUnique += "යරලවශෂසහෆ්ාැෘෙේෛොෝෞෟෲෳ෴กขฃคฆงจฉชซฌญฎฏฐตธนบปผฝพฟภมย";
	setUnique += "รฤลฦวศษสหฬอฮฯะัาำิีึืฺุู฿เแโใไๆ็่้๊๋์ํ๎๏๐๕๘๙๚๛ກຂຄງ";
	setUnique += "ຈຊຍຕນບປຜຝພຟມຢຣລວສຫອຮຯະັາຳິີຶືຸູົຼຽເແໂໃໄໆ່້໊໋໌ໍ໐໕໘໙";
	setUnique += "ໜໝༀ༁༂༃༄༆༇༈༉༊་༌།༎༏༐༕༘༙༚༛༜༝༞༟༠༡༢༣༤༥༦༧༨༩༪༫༬༭༮༯༰༱༲༳༴༵༶";
	setUnique += "༷༸༹༺༻༼༽༾༿ཀཁགགྷངཆཇཉཊཋཌཌྷཎཏཐཕམཙཚཛཛྷཝཞཟའཡརལཤཥསཧཨཀྵཪཱཱཱིིུུྲྀ";
	setUnique += "ཷླྀཹེཻོཽཾཿ྄ཱྀྀྂྃ྆྇ྈྉྊྋྐྕྙྚྛྜྜྷྞྟྠྡྡྷྣྤྥྦྦྷྨྩྪྫྫྷྭྮྯྰྱྲླྴ";
	setUnique += "ྵྶྷྸྐྵྺྻྼ྾྿࿀࿁࿂࿃࿄࿆࿇࿈࿉࿊࿋࿌࿏࿐ကခဂဃငဆဇဈဉညဋဌဍဎဏတပဘမယရလဝသဟဠ";
	setUnique += "အဣဤဥဦဧဩဪါာိီုူေဲံ့း္်ျြွှ၀၁၂၃၄၆၇၈၉၊။၌၍၎၏ၐၕၘၙႠႡႢႣႤႥ";
	setUnique += "ႦႧႨႩႪႫႬႭႮႯႰႱႲႳႴႵႶႷႸႹႺႻႼႽႾႿჀჁჂჃჄავიკლმნოპჟრსტუფქღყშ";
	setUnique += "ჩცძწჭხჯჰჱჲჳჴჵჶჷჸჹჺ჻ჼᄀᆢᆨᇹሀሁሂሃሄሆሇለሉሊላሌልሎሏሐሕመሙሚማሜምሞሟሠ";
	setUnique += "ሡሢሣሤሥሦሧረሩሪራሬርሮሯሰሱሲሳሴስሶሷሸሹሺሻሼሽሾሿቀቁቂቃቄቆቇቈቊቋቌቍቐቕቘቚቛቜቝ";
	setUnique += "በቡቢባቤብቦቧቨቩቪቫቬቭቮቯተቱቲታቴትቶቷቸቹቺቻቼችቾቿኀኁኂኃኄኆኇኈኊኋኌኍነንኘኙኚኛ";
	setUnique += "ኜኝኞኟአኡኢኣኤእኦኧከኩኪካኬክኮኯኰኲኳኴኵኸኹኺኻኼኽኾዀዂዃዄወዉዊዋዌውዎዏዐዕዘዙዚዛ";
	setUnique += "ዜዝዞዟዠዡዢዣዤዥዦዧየዩዪያዬይዮዯደዱዲዳዴድዶዷዸዹዺዻዼዽዾዿጀጁጂጃጄጆጇገጉጊጋጌግጎ";
	setUnique += "ጏጐጕጘጙጚጛጜጝጞጟጠጡጢጣጤጥጦጧጨጩጪጫጬጭጮጯጰጱጲጳጴጵጶጷጸጹጺጻጼጽጾጿፀፁፂፃፄፆፇ";
	setUnique += "ፈፉፊፋፌፍፎፏፐፕፘፙፚ፟፠፡።፣፤፥፦፧፨፩፪፫፬፭፮፯፰፱፲፳፴፵፶፷፸፹፺፻፼ᎀᎁᎂᎃᎄᎆᎇ";
	setUnique += "ᎈᎉᎊᎋᎌᎍᎎᎏ᎐᎕᎘᎙ᎠᎡᎢᎣᎤᎥᎦᎧᎨᎩᎪᎫᎬᎭᎮᎯᎰᎱᎲᎳᎴᎵᎶᎷᎸᎹᎺᎻᎼᎽᎾᎿᏀᏁᏂᏃᏄᏆ";
	setUnique += "ᏇᏈᏉᏊᏋᏌᏍᏎᏏᏐᏕᏘᏙᏚᏛᏜᏝᏞᏟᏠᏡᏢᏣᏤᏥᏦᏧᏨᏩᏪᏫᏬᏭᏮᏯᏰᏱᏲᏳᏴᐁᐂᐃᐄᐆᐇᐈᐉᐊᐋ";
	setUnique += "ᐌᐍᐎᐏᐐᐕᐘᐙᐚᐛᐜᐝᐞᐟᐠᐡᐢᐣᐤᐥᐦᐧᐨᐩᐪᐫᐬᐭᐮᐯᐰᐱᐲᐳᐴᐵᐶᐷᐸᐹᐺᐻᐼᐽᐾᐿᕀᕁᕂᕃ";
	setUnique += "ᕄᕆᕇᕈᕉᕊᕋᕌᕍᕎᕏᕐᕕᕘᕙᕚᕛᕜᕝᕞᕟᕠᕡᕢᕣᕤᕥᕦᕧᕨᕩᕪᕫᕬᕭᕮᕯᕰᕱᕲᕳᕴᕵᕶᕷᕸᕹᕺᕻᕼ";
	setUnique += "ᕽᕾᕿᘀᘁᘂᘃᘄᘆᘇᘈᘉᘊᘋᘌᘍᘎᘏᘐᘕᘘᘙᘚᘛᘜᘝᘞᘟᘠᘡᘢᘣᘤᘥᘦᘧᘨᘩᘪᘫᘬᘭᘮᘯᘰᘱᘲᘳᘴᘵ";
	setUnique += "ᘶᘷᘸᘹᘺᘻᘼᘽᘾᘿᙀᙁᙂᙃᙄᙆᙇᙈᙉᙊᙋᙌᙍᙎᙏᙐᙕᙘᙙᙚᙛᙜᙝᙞᙟᙠᙡᙢᙣᙤᙥᙦᙧᙨᙩᙪᙫᙬ᙭᙮";
	setUnique += "ᙯᙰᙱᙲᙳᙴᙵᙶᚁᚂᚃᚄᚆᚇᚈᚉᚊᚋᚌᚍᚎᚏᚐᚕᚘᚙᚚ᚛᚜ᚠᚡᚢᚣᚤᚥᚦᚧᚨᚩᚪᚫᚬᚭᚮᚯᚰᚱᚲᚳᚴ";
	setUnique += "ᚵᚶᚷᚸᚹᚺᚻᚼᚽᚾᚿᛀᛁᛂᛃᛄᛆᛇᛈᛉᛊᛋᛌᛍᛎᛏᛐᛕᛘᛙᛚᛛᛜᛝᛞᛟᛠᛡᛢᛣᛤᛥᛦᛧᛨᛩᛪ᛫᛬᛭";
	setUnique += "ᛮᛯᛰកខគឃងឆជឈញដឋឌឍណតថផមយរលវឝឞស";
	setUnique += "ហឡអឣឤឥឦឧឨឩឪឫឬឭឮឯឰឱឲឳាិីឹឺុូួើឿៀេែៃោំះ៕៘៙៚";
	setUnique += "៛ៜ៝០១២៣៤៥៦៧៨៩៰៱៲៳៴៵៶៷៸៹᠀᠁᠂᠃᠄᠆᠇᠈᠉᠊᠐᠕᠘᠙ᠠᠡᠢᠣᠤᠥᠦᠧᠨᠩᠪᠫᠬ";
	setUnique += "ᠭᠮᠯᠰᠱᠲᠳᠴᠵᠶᠷᠸᠹᠺᠻᠼᠽᠾᠿᡀᡁᡂᡃᡄᡆᡇᡈᡉᡊᡋᡌᡍᡎᡏᡐᡕᡘᡙᡚᡛᡜᡝᡞᡟᡠᡡᡢᡣᡤᡥ";
	setUnique += "ᡦᡧᡨᡩᡪᡫᡬᡭᡮᡯᡰᡱᡲᡳᡴᡵᡶᡷᢀᢁᢂᢃᢄᢆᢇᢈᢉᢊᢋᢌᢍᢎᢏᢐᢕᢘᢙᢚᢛᢜᢝᢞᢟᢠᢡᢢᢣᢤᢥᢦ";
	setUnique += "ᢧᢨᢩᥐᥕᥘᥙᥚᥛᥜᥝᥞᥟᥠᥡᥢᥣᥤᥥᥦᥧᥨᥩᥪᥫᥬᥭᥰᥱᥲᥳᥴᦀᦁᦂᦃᦄᦆᦇᦈᦉᦊ";
	setUnique += "ᦋᦌᦍᦎᦏᦐᦕᦘᦙᦚᦛᦜᦝᦞᦟᦠᦡᦢᦣᦤᦥᦦᦧᦨᦩᦰᦱᦲᦳᦴᦵᦶᦷᦸᦹᦺᦻᦼᦽᦾᦿᧀᧁᧂᧃᧄᧆᧇᧈᧉ";
	setUnique += "᧐᧕᧘᧙᧞᧟᧠᧡᧢᧣᧤᧥᧦᧧᧨᧩᧪᧫᧬᧭᧮᧯᧰᧱᧲᧳᧴᧵᧶᧷᧸᧹᧺᧻᧼᧽᧾᧿ᨀᨁᨂᨃᨄᨆᨇᨈᨉᨊᨋᨌ";
	setUnique += "ᨍᨎᨏᨐᨕᨘᨙᨚᨛ᨞᨟ᴀᴁᴂᴃᴄᴆᴇᴈᴉᴊᴋᴌᴍᴎᴏᴐᴕᴘᴙᴚᴛᴜᴝᴞᴟᴠᴡᴢᴣᴤᴥᴦᴧᴨᴩᴪᴫᴬᴭ";
	setUnique += "ᴮᴯᴰᴱᴲᴳᴴᴵᴶᴷᴸᴹᴺᴻᴼᴽᴾᴿᵀᵁᵂᵃᵄᵆᵇᵈᵉᵊᵋᵌᵍᵎᵏᵐᵕᵘᵙᵚᵛᵜᵝᵞᵟᵠᵡᵢᵣᵤᵥᵦ";
	setUnique += "ᵧᵨᵩᵪᵫᵬᵭᵮᵯᵰᵱᵲᵳᵴᵵᵶᵷᵸᵹᵺᵻᵼᵽᵾᵿᶀᶁᶂᶃᶄᶆᶇᶈᶉᶊᶋᶌᶍᶎᶏᶐᶕᶘᶙᶚᶛᶜᶝᶞᶟ";
	setUnique += "ᶠᶡᶢᶣᶤᶥᶦᶧᶨᶩᶪᶫᶬᶭᶮᶯᶰᶱᶲᶳᶴᶵᶶᶷᶸᶹᶺᶻᶼᶽᶾᶿ᷂᷀᷁᷃ḀḁḂḃḄḆḇḈḉḊḋḌḍḎ";
	setUnique += "ḏḐḕḘḙḚḛḜḝḞḟḠḡḢḣḤḥḦḧḨḩḪḫḬḭḮḯḰḱḲḳḴḵḶḷḸḹḺḻḼḽḾḿṀṁṂṃṄṆṇ";
	setUnique += "ṈṉṊṋṌṍṎṏṐṕṘṙṚṛṜṝṞṟṠṡṢṣṤṥṦṧṨṩṪṫṬṭṮṯṰṱṲṳṴṵṶṷṸṹṺṻṼṽṾṿ";
	setUnique += "ẀẁẂẃẄẆẇẈẉẊẋẌẍẎẏẐẕẘẙẚẛẠạẢảẤấẦầẨẩẪẫẬậẮắẰằẲẳẴẵẶặẸẹẺẻẼ";
	setUnique += "ẽẾếỀềỂểỄỆệỈỉỊịỌọỎỏỐổỘộỚớỜờỞởỠỡỢợỤụỦủỨứỪừỬửỮữỰựỲỳỴỵ";
	setUnique += "ỶỷỸỹἀἁἂἃἄἆἇἈἉἊἋἌἍἎἏἐἕἘἙἚἛἜἝἠἡἢἣἤἥἦἧἨἩἪἫἬἭἮἯἰἱἲἳἴἵἶ";
	setUnique += "ἷἸἹἺἻἼἽἾἿὀὁὂὃὄὈὉὊὋὌὍὐὕὙὛὝὟὠὡὢὣὤὥὦὧὨὩὪὫὬὭὮὯὰάὲέὴήὶί";
	setUnique += "ὸόὺύὼώᾀᾁᾂᾃᾄᾆᾇᾈᾉᾊᾋᾌᾍᾎᾏᾐᾕᾘᾙᾚᾛᾜᾝᾞᾟᾠᾡᾢᾣᾤᾥᾦᾧᾨᾩᾪᾫᾬᾭᾮᾯᾰᾱᾲ";
	setUnique += "ᾳᾴᾶᾷᾸᾹᾺΆᾼ᾽ι᾿῀῁ῂῃῄῆῇῈΈῊΉῌ῍῎῏ῐῘῙῚΊ῝῞῟ῠῡῢΰῤῥῦῧῨῩῪΎῬ῭΅";
	setUnique += "`ῲῳῴῶῷῸΌῺΏῼ´῾‐―‚‛„‟†‡•‣․‥‧‰‱′″‴‵‶‷‸‹›※‼‽‾‿⁀⁁⁂⁃⁄⁆⁇⁈";
	setUnique += "⁉⁊⁋⁌⁍⁎⁏⁐⁕⁘⁙⁚⁛⁜⁝⁞⁰ⁱ⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ⁿ₀₁₂₃₄₆₇₈₉₊₋₌₍₎ₐ₠₡₢₣₤";
	setUnique += "₥₦₧₨₩₪₫€₭₮₯₰₱₲₳₴₵₶₷₸₹₺⃘⃙⃚⃐⃕⃛⃜⃝⃞⃟⃠⃡⃢⃣⃤⃥⃦⃪⃫⃨⃧⃩℀℁ℂ℃℄℆";
	setUnique += "ℇ℈℉ℊℋℌℍℎℏℐℕ℘ℙℚℛℜℝ℞℟℠℡™℣ℤ℥Ω℧ℨ℩KÅℬℭ℮ℯℰℱℲℳℴℵℶℷℸℹ℺℻ℼℽℾ";
	setUnique += "ℿↀↁↂↃↄↆↇↈ↉←↕↘↙↚↛↜↝↞↟↠↡↢↣↤↥↦↧↨↩↪↫↬↭↮↯↰↱↲↳↴↵↶↷↸↹↺↻↼↽";
	setUnique += "⇷⇸⇹⇺⇻⇼⇽⇾⇿∀∁∂∃∄∆∇∈∉∊∋∌∍∎∏∐∕∘∙√∛∜∝∞∟∠∡∢∣∤∥∦∧∨∩∪∫∬∭∮∯";
	setUnique += "∰∱∲∳∴∵∶∷∸∹∺∻∼∽∾∿≀≁≂≃≄≆≇≈≉≊≋≌≍≎≏≐≕≘≙≚≛≜≝≞≟≠≡≢≣≤≥≦≧≨";
	setUnique += "⊢⊣⊤⊥⊦⊧⊨⊩⊪⊫⊬⊭⊮⊯⊰⊱⊲⊳⊴⊵⊶⊷⊸⊹⊺⊻⊼⊽⊾⊿⋀⋁⋂⋃⋄⋆⋇⋈⋉⋊⋋⋌⋍⋎⋏⋐⋕⋘⋙⋚";
	setUnique += "⌎⌏⌐⌕⌘⌙⌚⌛⌜⌝⌞⌟⌠⌡⌢⌣⌤⌥⌦⌧⌨〈〉⌫⌬⌭⌮⌯⌰⌱⌲⌳⌴⌵⌶⌷⌸⌹⌺⌻⌼⌽⌾⌿⍀⍁⍂⍃⍄⍆";
	setUnique += "⎸⎹⎺⎻⎼⎽⎾⎿⏀⏁⏂⏃⏄⏆⏇⏈⏉⏊⏋⏌⏍⏎⏏⏐⏕⏘⏙⏚⏛⏜⏝⏞⏟⏠⏡⏢⏣⏤⏥⏦⏧⏨⏰⏱⏲⏳␀␁␂␃";
	setUnique += "␄␆␇␈␉␊␋␌␍␎␏␐␕␘␙␚␛␜␝␞␟␠␡␢␣␤␥␦╀╁╂╃╄╆╇╈╉╊╋╌╍╎╏═╕╘╙╚╛╜";
	setUnique += "╝╞╟╠╡╢╣╤╥╦╧╨╩╪╫╬╭╮╯╰╱╲╳╴╵╶╷╸╹╺╻╼╽╾╿☀☁☂☃☄☆☇☈☉☊☋☌☍☎☏";
	setUnique += "☐☕☘☙☚☛☜☝☞☟☠☡☢☣☤☥☦☧☨☩☪☫☬☭☮☯☰☱☲☳☴☵☶☷☸☹☺☻☼☽☾☿♀♁♂♃♄♆♇♈";
	setUnique += "♉♊♋♌♍♎♏♐♕♘♙♚♛♜♝♞♟♠♡♢♣♤♥♦♧♨♩♪♫♬♭♮♯♰♱♲♳♴♵♶♷♸♹♺♻♼♽♾♿⚀";
	setUnique += "⚁⚂⚃⚄⚆⚇⚈⚉⚊⚋⚌⚍⚎⚏⚐⚕⚘⚙⚚⚛⚜⚝⚞⚟⚠⚡⚢⚣⚤⚥⚦⚧⚨⚩⚪⚫⚬⚭⚮⚯⚰⚱⚲⚳⚴⚵⚶⚷⚸⚹";
	setUnique += "⚺⚻⚼⚽⚾⚿⛀⛁⛂⛃⛄⛆⛇⛈⛉⛊⛋⛌⛍⛎⛏⛐⛕⛘⛙⛚⛛⛜⛝⛞⛟⛠⛡⛢⛣⛤⛥⛦⛧⛨⛩⛪⛫⛬⛭⛮⛯⛰⛱⛲";
	setUnique += "⛳⛴⛵⛶⛷⛸⛹⛺⛻⛼⛽⛾⛿✁✂✃✄✆✇✈✉✌✍✎✏✐✕✘✙✚✛✜✝✞✟✠✡✢✣✤✥✦✧✩✪✫✬✭✮✯";
	setUnique += "✰✱✲✳✴✵✶✷✸✹✺✻✼✽✾✿❀❁❂❃❄❆❇❈❉❊❋❍❏❐❘❙❚❛❜❝❞❡❢❣❤❥❦❧❨❩❪❫❬❭";
	setUnique += "❮❯❰❱❲❳❴❵❶❷❸❹❺❻❼❽❾❿➀➁➂➃➄➆➇➈➉➊➋➌➍➎➏➐➘➙➚➛➜➝➞➟➠➡➢➣➤➥➦➧";
	setUnique += "➨➩➪➫➬➭➮➯➱➲➳➴➵➶➷➸➹➺➻➼➽➾⟀⟁⟂⟃⟄⟆⟐⟕⟘⟙⟚⟛⟜⟝⟞⟟⟠⟡⟢⟣⟤⟥⟦⟧⟨⟩⟪⟫";
	setUnique += "⟰⟱⟲⟳⟴⟵⟶⟷⟸⟹⟺⟻⟼⟽⟾⟿⠁⠂⠃⠄⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏⠐⠕⠘⠙⠚⠛⠜⠝⠞⠟⠠⠡⠢⠣⠤⠥⠦⠧⠨⠩";
	setUnique += "⠪⠫⠬⠭⠮⠯⠰⠱⠲⠳⠴⠵⠶⠷⠸⠹⠺⠻⠼⠽⠾⠿⡀⡁⡂⡃⡄⡆⡇⡈⡉⡊⡋⡌⡍⡎⡏⡐⡕⡘⡙⡚⡛⡜⡝⡞⡟⡠⡡⡢";
	setUnique += "⡣⡤⡥⡦⡧⡨⡩⡪⡫⡬⡭⡮⡯⡰⡱⡲⡳⡴⡵⡶⡷⡸⡹⡺⡻⡼⡽⡾⡿⢀⢁⢂⢃⢄⢆⢇⢈⢉⢊⢋⢌⢍⢎⢏⢐⢕⢘⢙⢚⢛";
	setUnique += "⢜⢝⢞⢟⢠⢡⢢⢣⢤⢥⢦⢧⢨⢩⢪⢫⢬⢭⢮⢯⢰⢱⢲⢳⢴⢵⢶⢷⢸⢹⢺⢻⢼⢽⢾⢿⣀⣁⣂⣃⣄⣆⣇⣈⣉⣊⣋⣌⣍⣎";
	setUnique += "⣏⣐⣕⣘⣙⣚⣛⣜⣝⣞⣟⣠⣡⣢⣣⣤⣥⣦⣧⣨⣩⣪⣫⣬⣭⣮⣯⣰⣱⣲⣳⣴⣵⣶⣷⣸⣹⣺⣻⣼⣽⣾⣿⤀⤁⤂⤃⤄⤆⤇";
	setUnique += "⬂⬃⬄⬆⬇⬈⬉⬊⬋⬌⬍⬎⬏⬐ⰀⰁⰂⰃⰄⰆⰇⰈⰉⰊⰋⰌⰍⰎⰏⰐⰕⰘⰙⰚⰛⰜⰝⰞⰟⰠⰡⰢⰣⰤⰥⰦⰧⰨⰩⰪ";
	setUnique += "ⰫⰬⰭⰮⰰⰱⰲⰳⰴⰵⰶⰷⰸⰹⰺⰻⰼⰽⰾⰿⱀⱁⱂⱃⱄⱆⱇⱈⱉⱊⱋⱌⱍⱎⱏⱐⱕⱘⱙⱚⱛⱜⱝⱞⲀⲁⲂⲃⲄⲆ";
	setUnique += "ⲿⳀⳁⳂⳃⳄⳆⳇⳈⳉⳊⳋⳌⳍⳎⳏⳐⳕⳘⳙⳚⳛⳜⳝⳞⳟⳠⳡⳢⳣⳤ⳥⳦⳧⳨⳩⳪⳹⳺⳻⳼⳽⳾⳿ⴀⴁⴂⴃⴄⴆ";
	setUnique += "ⴇⴈⴉⴊⴋⴌⴍⴎⴏⴐⴕⴘⴙⴚⴛⴜⴝⴞⴟⴠⴡⴢⴣⴤⴥⴰⴱⴲⴳⴴⴵⴶⴷⴸⴹⴺⴻⴼⴽⴾⴿⵀⵁⵂⵃⵄⵆⵇⵈⵉ";
	setUnique += "ⵊⵋⵌⵍⵎⵏⵐⵕⵘⵙⵚⵛⵜⵝⵞⵟⵠⵡⵢⵣⵤⵥⵯⶀⶁⶂⶃⶄⶆⶇⶈⶉⶊⶋⶌⶍⶎⶏⶐⶕⶠⶡⶢⶣⶤⶥⶦⶨⶩⶪ";
	setUnique += "ⶫⶬⶭⶮⶰⶱⶲⶳⶴⶵⶶⶸⶹⶺⶻⶼⶽⶾⷀⷁⷂⷃⷄⷆⷈⷉⷊⷋⷌⷍⷎⷐⷕⷘⷙⷚⷛⷜⷝⷞ⸀⸁⸂⸃⸄⸆⸇⸈⸉⸊";
	setUnique += "⸋⸌⸍⸎⸏⸐⸕⸜⸝⺀⺙⺛⺞⺟⺠⻲⻳⼀⿕⿰⿱⿲⿳⿴⿵⿶⿷⿸⿹⿺⿻、。〃〆〇〈〉《》「」『』【〕〘〙〚〛";
	setUnique += "〜〝〞〟〠〡〩〪〭〮〯〫〬〰〱〲〳〴〵〶〷〸〺〻〼〽〾〿ぁあぃいうぇえぉおかがきぎくぐさじすずせぜそ";
	setUnique += "ぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゆょよらりるれろゎわゐ";
	setUnique += "ゕ゙゚゛゜ゝゞゟ゠ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツテデトドナ";
	setUnique += "ニヌネノハバフヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヷヸヹヺ・ーヽヾヿㄆㄇㄈ";
	setUnique += "ㄉㄊㄋㄌㄍㄎㄏㄐㄕㄘㄙㄚㄛㄜㄝㄞㄟㄠㄡㄢㄣㄤㄥㄦㄧㄨㄩㄪㄫㄬㄱㄴㄷㄹㆎ㆐㆕㆘㆙㆚㆛㆜㆝㆞㆟ㆠㆡㆢㆣㆤ";
	setUnique += "ㆥㆦㆧㆨㆩㆪㆫㆬㆭㆮㆯㆰㆱㆲㆳㆴㆵㆶㆷ㇀㇁㇂㇃㇄㇆㇇㇈㇉㇊㇋㇌㇍㇎㇏ㇰㇱㇲㇳㇴㇵㇶㇷㇸㇹㇺㇻㇼㇽㇾㇿ";
	setUnique += "㈀㈞㈠㈡㈢㈣㈤㈥㈦㈧㈨㈩㈪㈫㈬㈭㈮㈯㈰㈱㈲㈳㈴㈵㈶㈷㈸㈹㈺㈻㈼㈽㈾㈿㉀㉁㉂㉃㉐㉕㉘㉙㉚㉛㉜㉝㉞㉟㉠㉻";
	setUnique += "㉼㉽㉾㉿㊀㊁㊂㊃㊄㊆㊇㊈㊉㊊㊋㊌㊍㊎㊏㊐㊕㊘㊙㊚㊛㊜㊝㊞㊟㊠㊡㊢㊣㊤㊥㊦㊧㊨㊩㊪㊫㊬㊭㊮㊯㊰㊱㊲㊳㊴";
	setUnique += "㊵㊶㊷㊸㊹㊺㊻㊼㊽㊾㊿㋀㋁㋂㋃㋄㋆㋇㋈㋉㋊㋋㋌㋍㋎㋏㋐㋕㋘㋙㋚㋛㋜㋝㋞㋟㋠㋡㋢㋣㋤㋥㋦㋧㋨㋩㋪㋫㋬㋭";
	setUnique += "㋮㋯㋰㋱㋲㋳㋴㋵㋶㋷㋸㋹㋺㋻㋼㋽㋾㌀㌁㌂㌃㌄㌆㌇㌈㌉㌊㌋㌌㌍㌎㌏㌐㌕㌘㌙㌚㌛㌜㌝㌞㌟㌠㌡㌢㌣㌤㌥㌦㌧";
	setUnique += "㌨㌩㌪㌫㌬㌭㌮㌯㌰㌱㌲㌳㌴㌵㌶㌷㌸㌹㌺㌻㌼㌽㌾㌿㍀㍁㍂㍃㍄㍆㍇㍈㍉㍊㍋㍌㍍㍎㍏㍐㍕㍘㍙㍚㍛㍜㍝㍞㍟㍠";
	setUnique += "㍡㍢㍣㍤㍥㍦㍧㍨㍩㍪㍫㍬㍭㍮㍯㍰㍱㍲㍳㍴㍵㍶㍷㍸㍹㍺㍻㍼㍽㍾㍿㎀㎁㎂㎃㎄㎆㎇㎈㎉㎊㎋㎌㎍㎎㎏㎐㎕㎘㎙";
	setUnique += "㎚㎛㎜㎝㎞㎟㎠㎡㎢㎣㎤㎥㎦㎧㎨㎩㎪㎫㎬㎭㎮㎯㎰㎱㎲㎳㎴㎵㎶㎷㎸㎹㎺㎻㎼㎽㎾㎿㏀㏁㏂㏃㏄㏆㏇㏈㏉㏊㏋㏌";
	setUnique += "㏍㏎㏏㏐㏕㏘㏙㏚㏛㏜㏝㏞㏟㏠㏡㏢㏣㏤㏥㏦㏧㏨㏩㏪㏫㏬㏭㏮㏯㏰㏱㏲㏳㏴㏵㏶㏷㏸㏹㏺㏻㏼㏽㏾㏿㐀䶵䷀䷁䷂";
	setUnique += "䷃䷄䷆䷇䷈䷉䷊䷋䷌䷍䷎䷏䷐䷕䷘䷙䷚䷛䷜䷝䷞䷟䷠䷡䷢䷣䷤䷥䷦䷧䷨䷩䷪䷫䷬䷭䷮䷯䷰䷱䷲䷳䷴䷵䷶䷷䷸䷹䷺䷻";
	setUnique += "䷼䷽䷾䷿一三上下不与东両两严並个中为主丽么之乎了事二于些亲人从付代令以们份企伊会似但住何作你使供侧侵";
	setUnique += "係俘保信倉個候借做停偷偽備傳働像僚决况冷几凡処出分切別到前剣剥劃功加动励労動務區十千升午单単占压原厳";
	setUnique += "去友反叢口只可号叹吃各合同名后否听商問啡器四回因园国图國土在地坐坚執基報場增壁壊壕士声売处夏多夜夠大";
	setUnique += "天夺女好如妨始嬉子它安完官定实実客害家容密富对対専将尋小就尽局屋属屬州工己已市带常平年并幸広废度庫庭";
	setUnique += "开弃弹弾彈彼往径很徊律後徘從復心忍応怎思怠性恐息悪惧想意愛感懈應戏成戰戻所手扎技拉拠拨持指挣捜採探接";
	setUnique += "提握援損敢散数整數明昨是時晚暴曲更書最月有朋望朝期木未本机杆来板果査栏样根格案業榴構槍標樣機檢欠次欢";
	setUnique += "欲欺歌止此步残殺每毛毯氣求汽没沿況法注活海深渡測渴満灌灯炸点為热無爆爭爱父牆物特犬狙独玛玩现現球理界";
	setUnique += "番當発發白的皮盟目盯直相看着知砲破確社福离私秘種空符第管箱篮簡米約紛素紧終経結絡給絶続練總續线练终经";
	setUnique += "给绿置署美義考而耳聊聞聲聽肢胎能脸自至般色苦荫虏處行衝衣表被裝西要見規覧覺规觉解言計訟許訴詐試話該認";
	setUnique += "ාවයන්නිරූපනයකරනඅතරඔවුන්ගේඑමරංගනයමාමොන්ටිසෝරියේදීහිංචිපිංචිහවාසින්දුවටදැමූනර්තනයටත්වඩාගොන්‍ය🐰🥴පස්සුහැදීමටආසන්නවූසමහරුcouple";
	setUnique += "ෂෝජින්අවිශ්වාසයඔරොත්තුකමප්රතිවිරෝධතාපෝලිමේමිලගායකයාගායකයාගේගායකයාගඅවශ්යතාවයගායිකාවඋල්ලංගායකයා";
	setUnique += "鼠鼻龥龻ꀀꀁꀂꀃꀄꀆꀇꀈꀉꀊꀋꀌꀍꀎꀏꀐꀕꀘꀙꀚꀛꀜꀝꀞꀟꀠꀡꀢꀣꀤꀥꀦꀧꀨꀩꀪꀫꀬꀭꀮꀯꀰꀱꀲꀳꀴ";
	setUnique += "ꀵꀶꀷꀸꀹꀺꀻꀼꀽꀾꀿꁀꁁꁂꁃꁄꁆꁇꁈꁉꁊꁋꁌꁍꁎꁏꁐꁕꁘꁙꁚꁛꁜꁝꁞꁟꁠꁡꁢꁣꁤꁥꁦꁧꁨꁩꁪꁫꁬꁭ";
	setUnique += "ꁮꁯꁰꁱꁲꁳꁴꁵꁶꁷꁸꁹꁺꁻꁼꁽꁾꁿꂀꂁꂂꂃꂄꂆꂇꂈꂉꂊꂋꂌꂍꂎꂏꂐꂕꂘꂙꂚꂛꂜꂝꂞꂟꂠꂡꂢꂣꂤꂥꂦ";
	setUnique += "ꂧꂨꂩꂪꂫꂬꂭꂮꂯꂰꂱꂲꂳꂴꂵꂶꂷꂸꂹꂺꂻꂼꂽꂾꂿꃀꃁꃂꃃꃄꃆꃇꃈꃉꃊꃋꃌꃍꃎꃏꃐꃕꃘꃙꃚꃛꃜꃝꃞꃟ";
	setUnique += "ꃠꃡꃢꃣꃤꃥꃦꃧꃨꃩꃪꃫꃬꃭꃮꃯꃰꃱꃲꃳꃴꃵꃶꃷꃸꃹꃺꃻꃼꃽꃾꃿꄀꄁꄂꄃꄄꄆꄇꄈꄉꄊꄋꄌꄍꄎꄏꄐꄕꄘ";
	setUnique += "ꄙꄚꄛꄜꄝꄞꄟꄠꄡꄢꄣꄤꄥꄦꄧꄨꄩꄪꄫꄬꄭꄮꄯꄰꄱꄲꄳꄴꄵꄶꄷꄸꄹꄺꄻꄼꄽꄾꄿꆀꆁꆂꆃꆄꆆꆇꆈꆉꆊꆋ";
	setUnique += "ꆌꆍꆎꆏꆐꆕꆘꆙꆚꆛꆜꆝꆞꆟꆠꆡꆢꆣꆤꆥꆦꆧꆨꆩꆪꆫꆬꆭꆮꆯꆰꆱꆲꆳꆴꆵꆶꆷꆸꆹꆺꆻꆼꆽꆾꆿꇀꇁꇂꇃ";
	setUnique += "ꇄꇆꇇꇈꇉꇊꇋꇌꇍꇎꇏꇐꇕꇘꇙꇚꇛꇜꇝꇞꇟꇠꇡꇢꇣꇤꇥꇦꇧꇨꇩꇪꇫꇬꇭꇮꇯꇰꇱꇲꇳꇴꇵꇶꇷꇸꇹꇺꇻꇼ";
	setUnique += "ꇽꇾꇿꈀꈁꈂꈃꈄꈆꈇꈈꈉꈊꈋꈌꈍꈎꈏꈐꈕꈘꈙꈚꈛꈜꈝꈞꈟꈠꈡꈢꈣꈤꈥꈦꈧꈨꈩꈪꈫꈬꈭꈮꈯꈰꈱꈲꈳꈴꈵ";
	setUnique += "ꈶꈷꈸꈹꈺꈻꈼꈽꈾꈿꉀꉁꉂꉃꉄꉆꉇꉈꉉꉊꉋꉌꉍꉎꉏꉐꉕꉘꉙꉚꉛꉜꉝꉞꉟꉠꉡꉢꉣꉤꉥꉦꉧꉨꉩꉪꉫꉬꉭꉮ";
	setUnique += "ꉯꉰꉱꉲꉳꉴꉵꉶꉷꉸꉹꉺꉻꉼꉽꉾꉿꊀꊁꊂꊃꊄꊆꊇꊈꊉꊊꊋꊌꊍꊎꊏꊐꊕꊘꊙꊚꊛꊜꊝꊞꊟꊠꊡꊢꊣꊤꊥꊦꊧ";
	setUnique += "ꊨꊩꊪꊫꊬꊭꊮꊯꊰꊱꊲꊳꊴꊵꊶꊷꊸꊹꊺꊻꊼꊽꊾꊿꋀꋁꋂꋃꋄꋆꋇꋈꋉꋊꋋꋌꋍꋎꋏꋐꋕꋘꋙꋚꋛꋜꋝꋞꋟꋠ";
	setUnique += "ꋡꋢꋣꋤꋥꋦꋧꋨꋩꋪꋫꋬꋭꋮꋯꋰꋱꋲꋳꋴꋵꋶꋷꋸꋹꋺꋻꋼꋽꋾꋿꌀꌁꌂꌃꌄꌆꌇꌈꌉꌊꌋꌌꌍꌎꌏꌐꌕꌘꌙ";
	setUnique += "ꌚꌛꌜꌝꌞꌟꌠꌡꌢꌣꌤꌥꌦꌧꌨꌩꌪꌫꌬꌭꌮꌯꌰꌱꌲꌳꌴꌵꌶꌷꌸꌹꌺꌻꌼꌽꌾꌿꍀꍁꍂꍃꍄꍆꍇꍈꍉꍊꍋꍌ";
	setUnique += "ꍍꍎꍏꍐꍕꍘꍙꍚꍛꍜꍝꍞꍟꍠꍡꍢꍣꍤꍥꍦꍧꍨꍩꍪꍫꍬꍭꍮꍯꍰꍱꍲꍳꍴꍵꍶꍷꍸꍹꍺꍻꍼꍽꍾꍿꎀꎁꎂꎃꎄ";
	setUnique += "ꎆꎇꎈꎉꎊꎋꎌꎍꎎꎏꎐꎕꎘꎙꎚꎛꎜꎝꎞꎟꎠꎡꎢꎣꎤꎥꎦꎧꎨꎩꎪꎫꎬꎭꎮꎯꎰꎱꎲꎳꎴꎵꎶꎷꎸꎹꎺꎻꎼꎽ";
	setUnique += "ꎾꎿꏀꏁꏂꏃꏄꏆꏇꏈꏉꏊꏋꏌꏍꏎꏏꏐꏕꏘꏙꏚꏛꏜꏝꏞꏟꏠꏡꏢꏣꏤꏥꏦꏧꏨꏩꏪꏫꏬꏭꏮꏯꏰꏱꏲꏳꏴꏵꏶ";
	setUnique += "ꏷꏸꏹꏺꏻꏼꏽꏾꏿꐀꐁꐂꐃꐄꐆꐇꐈꐉꐊꐋꐌꐍꐎꐏꐐꐕꐘꐙꐚꐛꐜꐝꐞꐟꐠꐡꐢꐣꐤꐥꐦꐧꐨꐩꐪꐫꐬꐭꐮꐯ";
	setUnique += "ꐰꐱꐲꐳꐴꐵꐶꐷꐸꐹꐺꐻꐼꐽꐾꐿ각간갈감강같개객갤거건걸것게격견결경계고골곳공과관구국군굴";
	setUnique += "권그극근글금기김까깜깥깨껴꾸끄끝나난날납났내낼냄냈너널넘농뇌누눈눴느늘능니닙다단달담답당대댈던덮데도";
	setUnique += "돈돌동되된될때또뜨라락람래러런럴럼럽레려력련렸령로록론료류르른를름리릭린릴림릿마막만많말맛망맡매며면";
	setUnique += "몇모목몰몸못무문묻물뮤미믹밀및박반발밤방배밴버번법벤벽변보복볼봉부분불붙뷰비빨사삭살상새색생샷서선설";
	setUnique += "성세섹소속손쇄쇼수술쉬쉽슈스슬습승시식신실심십싶쌍썩썼아안앉않알압았액야약였예오올와완왜외용우운울워";
	setUnique += "원웠위유육으은을음의이인일있잊자잘장재쟁저적전절점정제졌조족존좋주준줄즈즉증지직진질짝째차착찬참창찾";
	setUnique += "처천철첫체초최축출취츠측치친칠침칼캐커컨컵콘콜콤크큰클키타탁탄탈탕태터턴토톨통투튄트특티틴팀파판팝패";
	setUnique += "퍼펀페편포폭폰필하한할핥함합해현혐호홀홍확황회획후휴흘히힣𐀂𘀢𙀦𚀪𛀮𜀲𝀶𞀺🀾𠁃";
	setUnique += "𡱊𣁏𦁜𨁤𪁬";
	setUnique += "􏟿嗀﨎﨏塚凞羽﨟蘒﨡諸﨣﨤逸都﨧﨩飯鶴侮頻並龎ﬀﬁﬂﬃﬄﬆﬕﭐﭕﭘﭙﭚﭛﭜﭝﭞﭟﭠﭡﭢﭣﭤﭥﭦﭧﭨ";
	setUnique += "ﭩﭪﭫﭬﭭﭮﭯﭰﭱﭲﭳﭴﭵﭶﭷﭸﭹﭺﭻﭼﭽﭾﭿﮀﮁﮂﮃﮄﮆﮇﮈﮉﮊﮋﮌﮍﮎﮏﮐﮕﮘﮙﮚﮛﮜﮝﮞﮟﮠﮡ";
	setUnique += "ﷳﷴﷵﷶﷷﷸﷹﷺﷻ﷼﷽︐︕︘︙︠︡︢︣︰︱︲︳︴︵︶︷︸︹︺︻︼︽︾︿﹀﹁﹂﹃﹄﹆﹇﹈﹉﹊﹋﹌﹍﹎﹏";
	setUnique += "﹐﹕﹘﹙﹚﹛﹜﹝﹞﹟﹠﹡﹢﹣﹤﹥﹦﹨﹩﹪﹫ﹰﹱﹲﹳﹴﹶﹷﹸﹹﹺﹻﹼﹽﹾﹿﺀﺁﺂﺃﺄﺆﺇﺈﺉﺊﺋﺌﺍﺎ";
	setUnique += "ﺏﺐﺕﺘﺙﺚﺛﺜﺝﺞﺟﺠﺡﺢﺣﺤﺥﺦﺧﺨﺩﺪﺫﺬﺭﺮﺯﺰﺱﺲﺳﺴﺵﺶﺷﺸﺹﺺﺻﺼﺽﺾﺿﻀﻁﻂﻃﻄﻆﻇ";
	setUnique += "ﻈﻉﻊﻋﻌﻍﻎﻏﻐﻕﻘﻙﻚﻛﻜﻝﻞﻟﻠﻡﻢﻣﻤﻥﻦﻧﻨﻩﻪﻫﻬﻭﻮﻯﻰﻱﻲﻳﻴﻵﻶﻷﻸﻹﻺﻻﻼ！＂＃";
	setUnique += "＄＆＇（）＊＋，－．／０５８９：；＜＝＞？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［＼";
	setUnique += "］＾＿｀ａｂｃｄｆｇｈｉｊｋｌｍｎｏｐｕｘｙｚ｛｜｝～｟｠｡｢｣､･ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵ";
	setUnique += "ｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾕﾘﾙﾚﾛﾜﾝﾞﾟﾾￂￇￊￏￚￜ￠￡￢￣￤￥￦￨";
	setUnique += "￩￪￫￬￭￮￼�";
}

function funGeneratePassword() {
	funCharacterSet();
	
    let output = "";
    let x = document.getElementById("pwLength").value;

	if (x < 8) {
        x = 8;
    }
	else if (x > 1001) {
		x = 1000;
	}

    x = x - 6;

    for (i = 1; i <= x; i++) {
        let randomNumber = Math.floor(Math.random() * setUnique.length);
        output += setUnique.charAt(randomNumber);
    }

    output = funGetSafeString() + output + funGetSafeString();

    document.getElementById("shgenpw").textContent = output;
    document.getElementById("shpwlength").textContent = "Password Length: " + output.length;
}

function funGetSafeString() {
    let setSafe = "~!@#$%^&*()_+`{}|[]\:;<>?,.//*-+wertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
    let str = "";
    for (i = 1; i <= 3; i++) {
        let randomNumber = Math.floor(Math.random() * setSafe.length);
        str += setSafe.charAt(randomNumber);
    }
    return str;
}

function funGetRandomNo(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
