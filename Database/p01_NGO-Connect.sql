-- MySQL dump 10.13  Distrib 8.0.44, for Win64 (x86_64)
--
-- Host: localhost    Database: projectdb
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `beneficiary_request`
--

DROP TABLE IF EXISTS `beneficiary_request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `beneficiary_request` (
  `request_id` int NOT NULL AUTO_INCREMENT,
  `beneficiary_id` int NOT NULL,
  `item_id` int NOT NULL,
  `amount_needed` decimal(10,2) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `request_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `request_status` varchar(50) NOT NULL,
  PRIMARY KEY (`request_id`),
  KEY `fk_req_beneficiary` (`beneficiary_id`),
  KEY `fk_req_item` (`item_id`),
  CONSTRAINT `fk_req_beneficiary` FOREIGN KEY (`beneficiary_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_req_item` FOREIGN KEY (`item_id`) REFERENCES `items` (`item_id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `beneficiary_request`
--

LOCK TABLES `beneficiary_request` WRITE;
/*!40000 ALTER TABLE `beneficiary_request` DISABLE KEYS */;
/*!40000 ALTER TABLE `beneficiary_request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cities` (
  `city_id` int NOT NULL AUTO_INCREMENT,
  `state_id` int NOT NULL,
  `city_name` varchar(100) NOT NULL,
  PRIMARY KEY (`city_id`),
  KEY `fk_state_cities` (`state_id`),
  CONSTRAINT `fk_state_cities` FOREIGN KEY (`state_id`) REFERENCES `states` (`state_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1073 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities`
--

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
INSERT INTO `cities` VALUES (1,1,'Anantapur'),(2,1,'Chittoor'),(3,1,'East Godavari'),(4,1,'Guntur'),(5,1,'Krishna'),(6,1,'Kurnool'),(7,1,'Prakasam'),(8,1,'Srikakulam'),(9,1,'Sri Potti Sriramulu Nellore'),(10,1,'Visakhapatnam'),(11,1,'Vizianagaram'),(12,1,'West Godavari'),(13,1,'YSR Kadapa'),(16,2,'Tawang'),(17,2,'West Kameng'),(18,2,'East Kameng'),(19,2,'Papum Pare'),(20,2,'Kurung Kumey'),(21,2,'Kra Daadi'),(22,2,'Lower Subansiri'),(23,2,'Upper Subansiri'),(24,2,'West Siang'),(25,2,'East Siang'),(26,2,'Siang'),(27,2,'Upper Siang'),(28,2,'Lower Siang'),(29,2,'Lower Dibang Valley'),(30,2,'Dibang Valley'),(31,2,'Anjaw'),(32,2,'Lohit'),(33,2,'Namsai'),(34,2,'Changlang'),(35,2,'Tirap'),(36,2,'Longding'),(47,3,'Baksa'),(48,3,'Barpeta'),(49,3,'Biswanath'),(50,3,'Bongaigaon'),(51,3,'Cachar'),(52,3,'Charaideo'),(53,3,'Chirang'),(54,3,'Darrang'),(55,3,'Dhemaji'),(56,3,'Dhubri'),(57,3,'Dibrugarh'),(58,3,'Dima Hasao'),(59,3,'Goalpara'),(60,3,'Golaghat'),(61,3,'Hailakandi'),(62,3,'Hojai'),(63,3,'Jorhat'),(64,3,'Kamrup'),(65,3,'Kamrup Metropolitan'),(66,3,'Karbi Anglong'),(67,3,'Karimganj'),(68,3,'Kokrajhar'),(69,3,'Lakhimpur'),(70,3,'Majuli'),(71,3,'Morigaon'),(72,3,'Nagaon'),(73,3,'Nalbari'),(74,3,'Sivasagar'),(75,3,'Sonitpur'),(76,3,'South Salmara-Mankachar'),(77,3,'Tinsukia'),(78,3,'Udalguri'),(79,3,'West Karbi Anglong'),(110,4,'Araria'),(111,4,'Arwal'),(112,4,'Aurangabad'),(113,4,'Banka'),(114,4,'Begusarai'),(115,4,'Bhagalpur'),(116,4,'Bhojpur'),(117,4,'Buxar'),(118,4,'Darbhanga'),(119,4,'East Champaran'),(120,4,'Gaya'),(121,4,'Gopalganj'),(122,4,'Jamui'),(123,4,'Jehanabad'),(124,4,'Kaimur'),(125,4,'Katihar'),(126,4,'Khagaria'),(127,4,'Kishanganj'),(128,4,'Lakhisarai'),(129,4,'Madhepura'),(130,4,'Madhubani'),(131,4,'Munger'),(132,4,'Muzaffarpur'),(133,4,'Nalanda'),(134,4,'Nawada'),(135,4,'Patna'),(136,4,'Purnia'),(137,4,'Rohtas'),(138,4,'Saharsa'),(139,4,'Samastipur'),(140,4,'Saran'),(141,4,'Sheikhpura'),(142,4,'Sheohar'),(143,4,'Sitamarhi'),(144,4,'Siwan'),(145,4,'Supaul'),(146,4,'Vaishali'),(147,4,'West Champaran'),(173,5,'Balod'),(174,5,'Baloda Bazar'),(175,5,'Balrampur'),(176,5,'Bastar'),(177,5,'Bemetara'),(178,5,'Bijapur'),(179,5,'Bilaspur'),(180,5,'Dantewada'),(181,5,'Dhamtari'),(182,5,'Durg'),(183,5,'Gariaband'),(184,5,'Janjgir-Champa'),(185,5,'Jashpur'),(186,5,'Kabirdham'),(187,5,'Kanker'),(188,5,'Kondagaon'),(189,5,'Korba'),(190,5,'Koriya'),(191,5,'Mahasamund'),(192,5,'Mungeli'),(193,5,'Narayanpur'),(194,5,'Raigarh'),(195,5,'Raipur'),(196,5,'Rajnandgaon'),(197,5,'Sukma'),(198,5,'Surajpur'),(199,5,'Surguja'),(204,6,'North Goa'),(205,6,'South Goa'),(207,7,'Ahmedabad'),(208,7,'Amreli'),(209,7,'Anand'),(210,7,'Aravalli'),(211,7,'Banaskantha'),(212,7,'Bharuch'),(213,7,'Bhavnagar'),(214,7,'Botad'),(215,7,'Chhota Udaipur'),(216,7,'Dahod'),(217,7,'Dang'),(218,7,'Devbhoomi Dwarka'),(219,7,'Gandhinagar'),(220,7,'Gir Somnath'),(221,7,'Jamnagar'),(222,7,'Junagadh'),(223,7,'Kheda'),(224,7,'Kutch'),(225,7,'Mahisagar'),(226,7,'Mehsana'),(227,7,'Morbi'),(228,7,'Narmada'),(229,7,'Navsari'),(230,7,'Panchmahal'),(231,7,'Patan'),(232,7,'Porbandar'),(233,7,'Rajkot'),(234,7,'Sabarkantha'),(235,7,'Surat'),(236,7,'Surendranagar'),(237,7,'Tapi'),(238,7,'Vadodara'),(239,7,'Valsad'),(270,8,'Ambala'),(271,8,'Bhiwani'),(272,8,'Charkhi Dadri'),(273,8,'Faridabad'),(274,8,'Fatehabad'),(275,8,'Gurugram'),(276,8,'Hisar'),(277,8,'Jhajjar'),(278,8,'Jind'),(279,8,'Kaithal'),(280,8,'Karnal'),(281,8,'Kurukshetra'),(282,8,'Mahendragarh'),(283,8,'Nuh'),(284,8,'Palwal'),(285,8,'Panchkula'),(286,8,'Panipat'),(287,8,'Rewari'),(288,8,'Rohtak'),(289,8,'Sirsa'),(290,8,'Sonipat'),(291,8,'Yamunanagar'),(301,9,'Bilaspur'),(302,9,'Chamba'),(303,9,'Hamirpur'),(304,9,'Kangra'),(305,9,'Kinnaur'),(306,9,'Kullu'),(307,9,'Lahaul and Spiti'),(308,9,'Mandi'),(309,9,'Shimla'),(310,9,'Sirmaur'),(311,9,'Solan'),(312,9,'Una'),(316,10,'Bokaro'),(317,10,'Chatra'),(318,10,'Deoghar'),(319,10,'Dhanbad'),(320,10,'Dumka'),(321,10,'East Singhbhum'),(322,10,'Garhwa'),(323,10,'Giridih'),(324,10,'Godda'),(325,10,'Gumla'),(326,10,'Hazaribagh'),(327,10,'Jamtara'),(328,10,'Khunti'),(329,10,'Koderma'),(330,10,'Latehar'),(331,10,'Lohardaga'),(332,10,'Pakur'),(333,10,'Palamu'),(334,10,'Ramgarh'),(335,10,'Ranchi'),(336,10,'Sahibganj'),(337,10,'Seraikela Kharsawan'),(338,10,'Simdega'),(339,10,'West Singhbhum'),(347,11,'Bagalkot'),(348,11,'Ballari'),(349,11,'Belagavi'),(350,11,'Bengaluru Rural'),(351,11,'Bengaluru Urban'),(352,11,'Bidar'),(353,11,'Chamarajanagar'),(354,11,'Chikkaballapur'),(355,11,'Chikkamagaluru'),(356,11,'Chitradurga'),(357,11,'Dakshina Kannada'),(358,11,'Davangere'),(359,11,'Dharwad'),(360,11,'Gadag'),(361,11,'Hassan'),(362,11,'Haveri'),(363,11,'Kalaburagi'),(364,11,'Kodagu'),(365,11,'Kolar'),(366,11,'Koppal'),(367,11,'Mandya'),(368,11,'Mysuru'),(369,11,'Raichur'),(370,11,'Ramanagara'),(371,11,'Shivamogga'),(372,11,'Tumakuru'),(373,11,'Udupi'),(374,11,'Uttara Kannada'),(375,11,'Vijayapura'),(376,11,'Yadgir'),(378,12,'Alappuzha'),(379,12,'Ernakulam'),(380,12,'Idukki'),(381,12,'Kannur'),(382,12,'Kasaragod'),(383,12,'Kollam'),(384,12,'Kottayam'),(385,12,'Kozhikode'),(386,12,'Malappuram'),(387,12,'Palakkad'),(388,12,'Pathanamthitta'),(389,12,'Thiruvananthapuram'),(390,12,'Thrissur'),(391,12,'Wayanad'),(393,13,'Agar Malwa'),(394,13,'Alirajpur'),(395,13,'Anuppur'),(396,13,'Ashoknagar'),(397,13,'Balaghat'),(398,13,'Barwani'),(399,13,'Betul'),(400,13,'Bhind'),(401,13,'Bhopal'),(402,13,'Burhanpur'),(403,13,'Chhatarpur'),(404,13,'Chhindwara'),(405,13,'Damoh'),(406,13,'Datia'),(407,13,'Dewas'),(408,13,'Dhar'),(409,13,'Dindori'),(410,13,'Guna'),(411,13,'Gwalior'),(412,13,'Harda'),(413,13,'Hoshangabad'),(414,13,'Indore'),(415,13,'Jabalpur'),(416,13,'Jhabua'),(417,13,'Katni'),(418,13,'Khandwa'),(419,13,'Khargone'),(420,13,'Mandla'),(421,13,'Mandsaur'),(422,13,'Morena'),(423,13,'Narsinghpur'),(424,13,'Neemuch'),(425,13,'Panna'),(426,13,'Raisen'),(427,13,'Rajgarh'),(428,13,'Ratlam'),(429,13,'Rewa'),(430,13,'Sagar'),(431,13,'Satna'),(432,13,'Sehore'),(433,13,'Seoni'),(434,13,'Shahdol'),(435,13,'Shajapur'),(436,13,'Sheopur'),(437,13,'Shivpuri'),(438,13,'Sidhi'),(439,13,'Singrauli'),(440,13,'Tikamgarh'),(441,13,'Ujjain'),(442,13,'Umaria'),(443,13,'Vidisha'),(456,14,'Ahmednagar'),(457,14,'Akola'),(458,14,'Amravati'),(459,14,'Aurangabad'),(460,14,'Beed'),(461,14,'Bhandara'),(462,14,'Buldhana'),(463,14,'Chandrapur'),(464,14,'Dhule'),(465,14,'Gadchiroli'),(466,14,'Gondia'),(467,14,'Hingoli'),(468,14,'Jalgaon'),(469,14,'Jalna'),(470,14,'Kolhapur'),(471,14,'Latur'),(472,14,'Mumbai City'),(473,14,'Mumbai Suburban'),(474,14,'Nagpur'),(475,14,'Nanded'),(476,14,'Nandurbar'),(477,14,'Nashik'),(478,14,'Osmanabad'),(479,14,'Palghar'),(480,14,'Parbhani'),(481,14,'Pune'),(482,14,'Raigad'),(483,14,'Ratnagiri'),(484,14,'Sangli'),(485,14,'Satara'),(486,14,'Sindhudurg'),(487,14,'Solapur'),(488,14,'Thane'),(489,14,'Wardha'),(490,14,'Washim'),(491,14,'Yavatmal'),(519,15,'Bishnupur'),(520,15,'Chandel'),(521,15,'Churachandpur'),(522,15,'Imphal East'),(523,15,'Imphal West'),(524,15,'Jiribam'),(525,15,'Kakching'),(526,15,'Kamjong'),(527,15,'Kangpokpi'),(528,15,'Noney'),(529,15,'Pherzawl'),(530,15,'Senapati'),(531,15,'Tamenglong'),(532,15,'Tengnoupal'),(533,15,'Thoubal'),(534,15,'Ukhrul'),(550,16,'East Garo Hills'),(551,16,'East Jaintia Hills'),(552,16,'East Khasi Hills'),(553,16,'North Garo Hills'),(554,16,'Ri Bhoi'),(555,16,'South Garo Hills'),(556,16,'South West Garo Hills'),(557,16,'South West Khasi Hills'),(558,16,'West Garo Hills'),(559,16,'West Jaintia Hills'),(560,16,'West Khasi Hills'),(565,17,'Aizawl'),(566,17,'Champhai'),(567,17,'Kolasib'),(568,17,'Lawngtlai'),(569,17,'Lunglei'),(570,17,'Mamit'),(571,17,'Saiha'),(572,17,'Serchhip'),(580,18,'Dimapur'),(581,18,'Kiphire'),(582,18,'Kohima'),(583,18,'Longleng'),(584,18,'Mokokchung'),(585,18,'Mon'),(586,18,'Peren'),(587,18,'Phek'),(588,18,'Tuensang'),(589,18,'Wokha'),(590,18,'Zunheboto'),(595,19,'Angul'),(596,19,'Balangir'),(597,19,'Balasore'),(598,19,'Bargarh'),(599,19,'Bhadrak'),(600,19,'Boudh'),(601,19,'Cuttack'),(602,19,'Deogarh'),(603,19,'Dhenkanal'),(604,19,'Gajapati'),(605,19,'Ganjam'),(606,19,'Jagatsinghpur'),(607,19,'Jajpur'),(608,19,'Jharsuguda'),(609,19,'Kalahandi'),(610,19,'Kandhamal'),(611,19,'Kendrapara'),(612,19,'Kendujhar'),(613,19,'Khordha'),(614,19,'Koraput'),(615,19,'Malkangiri'),(616,19,'Mayurbhanj'),(617,19,'Nabarangpur'),(618,19,'Nayagarh'),(619,19,'Nuapada'),(620,19,'Puri'),(621,19,'Rayagada'),(622,19,'Sambalpur'),(623,19,'Subarnapur'),(624,19,'Sundargarh'),(626,20,'Amritsar'),(627,20,'Barnala'),(628,20,'Bathinda'),(629,20,'Faridkot'),(630,20,'Fatehgarh Sahib'),(631,20,'Fazilka'),(632,20,'Ferozepur'),(633,20,'Gurdaspur'),(634,20,'Hoshiarpur'),(635,20,'Jalandhar'),(636,20,'Kapurthala'),(637,20,'Ludhiana'),(638,20,'Mansa'),(639,20,'Moga'),(640,20,'Muktsar'),(641,20,'Nawanshahr'),(642,20,'Pathankot'),(643,20,'Patiala'),(644,20,'Rupnagar'),(645,20,'Sahibzada Ajit Singh Nagar'),(646,20,'Sangrur'),(647,20,'Tarn Taran'),(657,21,'Ajmer'),(658,21,'Alwar'),(659,21,'Banswara'),(660,21,'Baran'),(661,21,'Barmer'),(662,21,'Bharatpur'),(663,21,'Bhilwara'),(664,21,'Bikaner'),(665,21,'Bundi'),(666,21,'Chittorgarh'),(667,21,'Churu'),(668,21,'Dausa'),(669,21,'Dholpur'),(670,21,'Dungarpur'),(671,21,'Hanumangarh'),(672,21,'Jaipur'),(673,21,'Jaisalmer'),(674,21,'Jalore'),(675,21,'Jhalawar'),(676,21,'Jhunjhunu'),(677,21,'Jodhpur'),(678,21,'Karauli'),(679,21,'Kota'),(680,21,'Nagaur'),(681,21,'Pali'),(682,21,'Pratapgarh'),(683,21,'Rajsamand'),(684,21,'Sawai Madhopur'),(685,21,'Sikar'),(686,21,'Sirohi'),(687,21,'Sri Ganganagar'),(688,21,'Tonk'),(689,21,'Udaipur'),(720,22,'East Sikkim'),(721,22,'North Sikkim'),(722,22,'South Sikkim'),(723,22,'West Sikkim'),(727,23,'Ariyalur'),(728,23,'Chengalpattu'),(729,23,'Chennai'),(730,23,'Coimbatore'),(731,23,'Cuddalore'),(732,23,'Dharmapuri'),(733,23,'Dindigul'),(734,23,'Erode'),(735,23,'Kallakurichi'),(736,23,'Kancheepuram'),(737,23,'Karur'),(738,23,'Krishnagiri'),(739,23,'Madurai'),(740,23,'Mayiladuthurai'),(741,23,'Nagapattinam'),(742,23,'Namakkal'),(743,23,'Nilgiris'),(744,23,'Perambalur'),(745,23,'Pudukkottai'),(746,23,'Ramanathapuram'),(747,23,'Ranipet'),(748,23,'Salem'),(749,23,'Sivaganga'),(750,23,'Tenkasi'),(751,23,'Thanjavur'),(752,23,'Theni'),(753,23,'Thoothukudi'),(754,23,'Tiruchirappalli'),(755,23,'Tirunelveli'),(756,23,'Tirupathur'),(757,23,'Tiruppur'),(758,23,'Tiruvallur'),(759,23,'Tiruvannamalai'),(760,23,'Tiruvarur'),(761,23,'Vellore'),(762,23,'Viluppuram'),(763,23,'Virudhunagar'),(790,24,'Adilabad'),(791,24,'Bhadradri Kothagudem'),(792,24,'Hyderabad'),(793,24,'Jagtial'),(794,24,'Jangaon'),(795,24,'Jayashankar Bhupalpally'),(796,24,'Jogulamba Gadwal'),(797,24,'Kamareddy'),(798,24,'Karimnagar'),(799,24,'Khammam'),(800,24,'Komaram Bheem'),(801,24,'Mahabubabad'),(802,24,'Mahbubnagar'),(803,24,'Mancherial'),(804,24,'Medak'),(805,24,'Medchal'),(806,24,'Nagarkurnool'),(807,24,'Nalgonda'),(808,24,'Nirmal'),(809,24,'Nizamabad'),(810,24,'Peddapalli'),(811,24,'Rajanna Sircilla'),(812,24,'Rangareddy'),(813,24,'Sangareddy'),(814,24,'Siddipet'),(815,24,'Suryapet'),(816,24,'Vikarabad'),(817,24,'Wanaparthy'),(818,24,'Warangal (Rural)'),(819,24,'Warangal (Urban)'),(820,24,'Yadadri Bhuvanagiri'),(821,25,'Dhalai'),(822,25,'Gomati'),(823,25,'Khowai'),(824,25,'North Tripura'),(825,25,'Sepahijala'),(826,25,'South Tripura'),(827,25,'Unakoti'),(828,25,'West Tripura'),(836,26,'Agra'),(837,26,'Aligarh'),(838,26,'Ambedkar Nagar'),(839,26,'Amethi'),(840,26,'Amroha'),(841,26,'Auraiya'),(842,26,'Ayodhya'),(843,26,'Azamgarh'),(844,26,'Baghpat'),(845,26,'Bahraich'),(846,26,'Ballia'),(847,26,'Balrampur'),(848,26,'Banda'),(849,26,'Barabanki'),(850,26,'Bareilly'),(851,26,'Basti'),(852,26,'Bhadohi'),(853,26,'Bijnor'),(854,26,'Budaun'),(855,26,'Bulandshahr'),(856,26,'Chandauli'),(857,26,'Chitrakoot'),(858,26,'Deoria'),(859,26,'Etah'),(860,26,'Etawah'),(861,26,'Farrukhabad'),(862,26,'Fatehpur'),(863,26,'Firozabad'),(864,26,'Gautam Buddha Nagar'),(865,26,'Ghaziabad'),(866,26,'Ghazipur'),(867,26,'Gonda'),(868,26,'Gorakhpur'),(869,26,'Hamirpur'),(870,26,'Hapur'),(871,26,'Hardoi'),(872,26,'Hathras'),(873,26,'Jalaun'),(874,26,'Jaunpur'),(875,26,'Jhansi'),(876,26,'Kannauj'),(877,26,'Kanpur Dehat'),(878,26,'Kanpur Nagar'),(879,26,'Kasganj'),(880,26,'Kaushambi'),(881,26,'Kheri'),(882,26,'Kushinagar'),(883,26,'Lalitpur'),(884,26,'Lucknow'),(885,26,'Maharajganj'),(886,26,'Mahoba'),(887,26,'Mainpuri'),(888,26,'Mathura'),(889,26,'Mau'),(890,26,'Meerut'),(891,26,'Mirzapur'),(892,26,'Moradabad'),(893,26,'Muzaffarnagar'),(894,26,'Pilibhit'),(895,26,'Pratapgarh'),(896,26,'Prayagraj'),(897,26,'Raebareli'),(898,26,'Rampur'),(899,26,'Saharanpur'),(900,26,'Sambhal'),(901,26,'Sant Kabir Nagar'),(902,26,'Shahjahanpur'),(903,26,'Shamli'),(904,26,'Shravasti'),(905,26,'Siddharthnagar'),(906,26,'Sitapur'),(907,26,'Sonbhadra'),(908,26,'Sultanpur'),(909,26,'Unnao'),(910,26,'Varanasi'),(963,27,'Almora'),(964,27,'Bageshwar'),(965,27,'Chamoli'),(966,27,'Champawat'),(967,27,'Dehradun'),(968,27,'Haridwar'),(969,27,'Nainital'),(970,27,'Pauri Garhwal'),(971,27,'Pithoragarh'),(972,27,'Rudraprayag'),(973,27,'Tehri Garhwal'),(974,27,'Udham Singh Nagar'),(975,27,'Uttarkashi'),(978,28,'Alipurduar'),(979,28,'Bankura'),(980,28,'Birbhum'),(981,28,'Cooch Behar'),(982,28,'Dakshin Dinajpur'),(983,28,'Darjeeling'),(984,28,'Hooghly'),(985,28,'Howrah'),(986,28,'Jalpaiguri'),(987,28,'Jhargram'),(988,28,'Kalimpong'),(989,28,'Kolkata'),(990,28,'Malda'),(991,28,'Murshidabad'),(992,28,'Nadia'),(993,28,'North 24 Parganas'),(994,28,'Paschim Bardhaman'),(995,28,'Paschim Medinipur'),(996,28,'Purba Bardhaman'),(997,28,'Purba Medinipur'),(998,28,'Purulia'),(999,28,'South 24 Parganas'),(1000,28,'Uttar Dinajpur'),(1009,32,'Central Delhi'),(1010,32,'East Delhi'),(1011,32,'New Delhi'),(1012,32,'North Delhi'),(1013,32,'North East Delhi'),(1014,32,'North West Delhi'),(1015,32,'Shahdara'),(1016,32,'South Delhi'),(1017,32,'South East Delhi'),(1018,32,'South West Delhi'),(1019,32,'West Delhi'),(1024,30,'Chandigarh'),(1025,29,'Nicobar'),(1026,29,'North and Middle Andaman'),(1027,29,'South Andaman'),(1028,33,'Anantnag'),(1029,33,'Bandipora'),(1030,33,'Baramulla'),(1031,33,'Budgam'),(1032,33,'Doda'),(1033,33,'Ganderbal'),(1034,33,'Jammu'),(1035,33,'Kathua'),(1036,33,'Kishtwar'),(1037,33,'Kulgam'),(1038,33,'Kupwara'),(1039,33,'Poonch'),(1040,33,'Pulwama'),(1041,33,'Rajouri'),(1042,33,'Ramban'),(1043,33,'Reasi'),(1044,33,'Samba'),(1045,33,'Shopian'),(1046,33,'Srinagar'),(1047,33,'Udhampur'),(1059,34,'Kargil'),(1060,34,'Leh'),(1062,36,'Karaikal'),(1063,36,'Mahe'),(1064,36,'Puducherry'),(1065,36,'Yanam'),(1069,31,'Dadra and Nagar Haveli'),(1070,31,'Daman'),(1071,31,'Diu'),(1072,35,'Lakshadweep');
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `donations`
--

DROP TABLE IF EXISTS `donations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `donations` (
  `donation_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `item_id` int NOT NULL,
  `donation_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `description` varchar(255) DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`donation_id`),
  KEY `fk_donation_user` (`user_id`),
  KEY `fk_donation_item` (`item_id`),
  CONSTRAINT `fk_donation_item` FOREIGN KEY (`item_id`) REFERENCES `items` (`item_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_donation_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donations`
--

LOCK TABLES `donations` WRITE;
/*!40000 ALTER TABLE `donations` DISABLE KEYS */;
/*!40000 ALTER TABLE `donations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items` (
  `item_id` int NOT NULL AUTO_INCREMENT,
  `item_name` varchar(100) NOT NULL,
  PRIMARY KEY (`item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `request_fulfil_log`
--

DROP TABLE IF EXISTS `request_fulfil_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `request_fulfil_log` (
  `request_id` int NOT NULL AUTO_INCREMENT,
  `benf_id` int DEFAULT NULL,
  `donor_id` varchar(45) DEFAULT NULL,
  `donation_date` timestamp NULL DEFAULT NULL,
  `donation_item_id` int DEFAULT NULL,
  PRIMARY KEY (`request_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `request_fulfil_log`
--

LOCK TABLES `request_fulfil_log` WRITE;
/*!40000 ALTER TABLE `request_fulfil_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `request_fulfil_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(50) NOT NULL,
  PRIMARY KEY (`role_id`),
  UNIQUE KEY `role_name` (`role_name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Admin'),(4,'Beneficiary'),(3,'Donor'),(2,'NGO');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `states`
--

DROP TABLE IF EXISTS `states`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `states` (
  `state_id` int NOT NULL AUTO_INCREMENT,
  `state_name` varchar(100) NOT NULL,
  PRIMARY KEY (`state_id`),
  UNIQUE KEY `state_name` (`state_name`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `states`
--

LOCK TABLES `states` WRITE;
/*!40000 ALTER TABLE `states` DISABLE KEYS */;
INSERT INTO `states` VALUES (29,'Andaman and Nicobar Islands'),(1,'Andhra Pradesh'),(2,'Arunachal Pradesh'),(3,'Assam'),(4,'Bihar'),(30,'Chandigarh'),(5,'Chhattisgarh'),(31,'Dadra and Nagar Haveli and Daman and Diu'),(32,'Delhi'),(6,'Goa'),(7,'Gujarat'),(8,'Haryana'),(9,'Himachal Pradesh'),(33,'Jammu and Kashmir'),(10,'Jharkhand'),(11,'Karnataka'),(12,'Kerala'),(34,'Ladakh'),(35,'Lakshadweep'),(13,'Madhya Pradesh'),(14,'Maharashtra'),(15,'Manipur'),(16,'Meghalaya'),(17,'Mizoram'),(18,'Nagaland'),(19,'Odisha'),(36,'Puducherry'),(20,'Punjab'),(21,'Rajasthan'),(22,'Sikkim'),(23,'Tamil Nadu'),(24,'Telangana'),(25,'Tripura'),(26,'Uttar Pradesh'),(27,'Uttarakhand'),(28,'West Bengal');
/*!40000 ALTER TABLE `states` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role_id` int NOT NULL,
  `phone_no` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `pan_no` varchar(15) NOT NULL,
  `account_status` varchar(45) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `state_id` int DEFAULT NULL,
  `city_id` int DEFAULT NULL,
  `reg_no` int DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `pan_no_UNIQUE` (`pan_no`),
  UNIQUE KEY `reg_no_UNIQUE` (`reg_no`),
  KEY `fk_role` (`role_id`),
  KEY `fk_users_state` (`state_id`),
  KEY `fk_users_city` (`city_id`),
  CONSTRAINT `fk_role` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_users_city` FOREIGN KEY (`city_id`) REFERENCES `cities` (`city_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_users_state` FOREIGN KEY (`state_id`) REFERENCES `states` (`state_id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'SatyavratBind12','satya@123',3,'7454125486','satya@gmail.com','YSPQS2076G','Active','Durg, Chattisgarh',5,182,NULL),(2,'YashSinhe17','yash@123',1,'9475124568','yashsinhe@gmail.com','NZVPS1976F','Active','Yavatmal, Maharashtra',14,491,NULL),(3,'JanhaviBhor08','janhavi@123',2,'6451245789','janhavi@gmail.com','XCTYP2387T','Active','Mumbai, Maharashtra',14,472,NULL),(4,'NeelamBhapkar26','neelam@123',4,'8974541256','neelam@gmail.com','HABGS6518K','Active','Pune, Maharashtra',14,481,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-01-21 12:45:02
