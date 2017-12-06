var Discord = require('discord.js');
var auth = require('./auth.json');
//var general="359512422312181771";
var general="308533816564252674";
// Configure logger settings
var RightAnswer="ME";

// Initialize Discord Bot

var bot = new Discord.Client();
var prefix="*";
var newquest;
var QuizThinkingtime;
var newwaitquest;
var RndQuest;
var RndQuest2;
var scorecard;
var newuser;
var plats=1;
var platsarray=["Första plats", "Andra plats", "Tredje plats"];
var player=new Array();
var score=new Array();
var Question=new Array();
var Questtype=new Array();
Questtype[0]="What the base max speed of a ";
Questtype[1]="What the base max viewrange of a ";
Questtype[2]="What the hull front armor of a ";
Questtype[3]="What the hull side armor of a ";
Questtype[4]="What the hull back armor of a ";
Questtype[5]="What the turret front armor of a ";
Questtype[6]="What the turret side armor of a ";
Questtype[7]="What the turret back armor of a ";
Questtype[8]="What the hitpoints of a ";

//Question[0].vagn=new Array();


Question[0]={type:"stat",vagn:"MAUS",speed:"20",range:"400",hullfront:"200",hullside:"185",hullback:"160",turretfront:"260",turretside:"210",turretback:"210",hitpoint:"3000"};
Question[1]={type:"stat",vagn:"IS-7",speed:"60",range:"400",hullfront:"150",hullside:"150",hullback:"100",turretfront:"240",turretside:"185",turretback:"94",hitpoint:"2400"};
Question[2]={type:"stat",vagn:"Cheiftain",speed:"42",range:"390",hullfront:"85",hullside:"51",hullback:"25",turretfront:"250",turretside:"140",turretback:"30",hitpoint:"2200"};
Question[3]={type:"stat",vagn:"113",speed:"50",range:"400",hullfront:"120",hullside:"120",hullback:"70",turretfront:"250",turretside:"180",turretback:"80",hitpoint:"2700"};
Question[4]={type:"stat",vagn:"E100",speed:"30",range:"400",hullfront:"200",hullside:"120",hullback:"150",turretfront:"250",turretside:"150",turretback:"150",hitpoint:"2700"};
Question[5]={type:"stat",vagn:"FV215b",speed:"34",range:"410",hullfront:"152",hullside:"102",hullback:"76",turretfront:"254",turretside:"152",turretback:"102",hitpoint:"2500"};
Question[6]={type:"stat",vagn:"IS-4",speed:"43",range:"400",hullfront:"140",hullside:"160",hullback:"100",turretfront:"250",turretside:"200",turretback:"170",hitpoint:"2500"};
Question[7]={type:"stat",vagn:"Kranvagn",speed:"60",range:"390",hullfront:"90",hullside:"70",hullback:"37",turretfront:"225",turretside:"70",turretback:"37",hitpoint:"2500"};
Question[8]={type:"stat",vagn:"AMX 50 B",speed:"65",range:"400",hullfront:"170",hullside:"30",hullback:"30",turretfront:"100",turretside:"50",turretback:"30",hitpoint:"2100"};
Question[9]={type:"stat",vagn:"OBJ 257",speed:"50",range:"390",hullfront:"150",hullside:"140",hullback:"70",turretfront:"350",turretside:"240",turretback:"100",hitpoint:"2100"};
Question[10]={type:"stat",vagn:"OBJ 260",speed:"60",range:"400",hullfront:"150",hullside:"150",hullback:"70",turretfront:"350",turretside:"240",turretback:"100",hitpoint:"2100"};
Question[11]={type:"stat",vagn:"OBJ 777",speed:"50",range:"390",hullfront:"132",hullside:"115",hullback:"45",turretfront:"258",turretside:"225",turretback:"90",hitpoint:"2100"};
Question[12]={type:"stat",vagn:"Pz.Kpfw. VII",speed:"33",range:"400",hullfront:"240",hullside:"160",hullback:"120",turretfront:"200",turretside:"160",turretback:"120",hitpoint:"2500"};
Question[13]={type:"stat",vagn:"Super Conqueror",speed:"34",range:"400",hullfront:"152",hullside:"102",hullback:"38",turretfront:"279",turretside:"89",turretback:"70",hitpoint:"2400"};
Question[14]={type:"stat",vagn:"T110E5",speed:"37",range:"400",hullfront:"254",hullside:"76",hullback:"38",turretfront:"203",turretside:"127",turretback:"76",hitpoint:"2200"};
Question[15]={type:"stat",vagn:"T57 Heavy",speed:"35",range:"400",hullfront:"229",hullside:"45",hullback:"45",turretfront:"152",turretside:"127",turretback:"51",hitpoint:"2250"};
Question[16]={type:"stat",vagn:"T95/Cheiftain",speed:"56",range:"400",hullfront:"114",hullside:"50",hullback:"19",turretfront:"250",turretside:"140",turretback:"30",hitpoint:"2000"};
Question[17]={type:"stat",vagn:"Type 5 Heavy",speed:"25",range:"400",hullfront:"270",hullside:"160",hullback:"150",turretfront:"280",turretside:"210",turretback:"200",hitpoint:"2900"};
Question[18]={type:"stat",vagn:"VK 72.01 K",speed:"33",range:"400",hullfront:"240",hullside:"160",hullback:"120",turretfront:"200",turretside:"160",turretback:"120",hitpoint:"2500"};
Question[19]={type:"stat",vagn:"WZ-111 5A",speed:"50",range:"400",hullfront:"140",hullside:"120",hullback:"60",turretfront:"300",turretside:"180",turretback:"60",hitpoint:"2200"};
Question[20]={type:"pic" ,purl:"http://hotpink.se/quizbot/mausfront.png",quest:"Where to aim to have highest chance to penetrate?",answer:"E3"};
Question[21]={type:"pic" ,purl:"http://hotpink.se/quizbot/maus2.png",quest:"Where to aim to have highest chance to penetrate?",answer:"E2"};
Question[22]={type:"pic" ,purl:"http://hotpink.se/quizbot/map1.jpg",quest:"What is the english name of this map?",answer:"ABBEY"};
Question[23]={type:"pic" ,purl:"http://hotpink.se/quizbot/map2.jpg",quest:"What is the english name of this map?",answer:"AIRFIELD"};
Question[24]={type:"pic" ,purl:"http://hotpink.se/quizbot/map3.jpg",quest:"What is the english name of this map?",answer:"ARTIC REGION"};
Question[25]={type:"pic" ,purl:"http://hotpink.se/quizbot/map4.jpg",quest:"What is the english name of this map?",answer:"CLIFF"};
Question[26]={type:"pic" ,purl:"http://hotpink.se/quizbot/map5.jpg",quest:"What is the english name of this map?",answer:"EL HALLUF"};
Question[27]={type:"pic" ,purl:"http://hotpink.se/quizbot/map6.jpg",quest:"What is the english name of this map?",answer:"ENSK"};

//Question.vagn.push("T110E5");
//

console.log(Question.length);
console.log(Question[7].turretback);

var AntalQuestions=Question.length;
var QuizOnTheRun=0;
var QuestionAsked=0;

function WaitToAskQuestion()
{
    clearTimeout(newwaitquest);
    QuestionAsked=0;
    bot.channels.find("id",general).send("New question is coming soon.");

    newquest=setTimeout(function() { AskQuestion();}, 5000);

}

function TimesUp()
{
    clearTimeout(QuizThinkingtime);
    QuestionAsked=0;
    bot.channels.find("id",general).send("No one had the right answer. Right answer was " + RightAnswer);

    newwaitquest=setTimeout(function() { WaitToAskQuestion();}, 5000);
}

function AskQuestion()
{
    clearTimeout(newquest);
    RndQuest=Math.floor(Math.random() * AntalQuestions);
    RndQuest2=Math.floor(Math.random() * 9);
     //RndQuest=20;
    if (Question[RndQuest].type=="stat")
    {
        bot.channels.find("id",general).send("``` " + Questtype[RndQuest2] + Question[RndQuest].vagn + "```");
        switch (RndQuest2)
        {
            case 0:
                RightAnswer=Question[RndQuest].speed;
            break;
            case 1:
                RightAnswer=Question[RndQuest].range;
            break;
            case 2:
                RightAnswer=Question[RndQuest].hullfront;
            break;
            case 3:
                RightAnswer=Question[RndQuest].hullside;
            break;
            case 4:
                RightAnswer=Question[RndQuest].hullback;
            break;
            case 5:
                RightAnswer=Question[RndQuest].turretfront;
            break;
            case 6:
                RightAnswer=Question[RndQuest].turretside;
            break;
            case 7:
                RightAnswer=Question[RndQuest].turretback;
            break;
            case 8:
                RightAnswer=Question[RndQuest].hitpoint;
            break;
        }
        
    }
    else if (Question[RndQuest].type=="pic")
    {
        bot.channels.find("id",general).send("``` " + Question[RndQuest].quest + "```");
        bot.channels.find("id",general).send(Question[RndQuest].purl);
        RightAnswer=Question[RndQuest].answer;
    }
    else
    {
        bot.channels.find("id",general).send("Who is the best wot player?");
    }
    QuestionAsked=1;
    //QuizThinkingtime=setTimeout(TimesUp(), 20000);
    QuizThinkingtime=setTimeout(function() { TimesUp();}, 20000);
}

function StartQuiz(oname)
{
    //bot.channels.find("id",general).send("QUIZ!!");
    if (QuizOnTheRun==1)
    {
        bot.channels.find("id",general).send("Take it easy! One quiz at the time is enough.");
    }
    else
    {
        bot.channels.find("id",general).send("Okey! Lets start a quiz and see who know best!\n First question is going soon.");
        QuizOnTheRun=1;
        //newquest=setTimeout(AskQuestion(), 2000);
        newquest=setTimeout(function() { AskQuestion();}, 5000);
    }
    
}

function StopQuiz()
{
    bot.channels.find("id",general).send("``` Now we are done for this time. ```");
    QuizOnTheRun=0;
    clearTimeout(newquest);
    clearTimeout(newwaitquest);
    clearTimeout(QuizThinkingtime);
    clearTimeout(newwaitquest);
    newquest=setTimeout(function() { ScoreBoard();}, 2000);
}

function ScoreBoard()
{	
				plats=0;
				for (var i = 0; i < 100; i++) 
				{
					newuser=0;
					for (var x = 0; x < player.length; x++) 
					{
						//bot.sendMessage({
						//	to: QuizchannelID,
						//	message: i + " - " + x + " - " + score[x]});
						if (score[x]==10-i)
						{
							bot.channels.find("id",general).send("``` På " + platsarray[plats] + " kommer " + player[x] + " med " + score[x] + "rätt ```");
							newuser=1;
						}
						if (newuser==1)
						{
							plats=plats+1;
							newuser=0;
						}
					}
					
					if (plats>2) {break;}
				}
}


bot.on('ready', function (evt) {
    console.log('Connected');
    console.log('Logged in as: ');
    console.log(bot.username + ' - (' + bot.id + ')');
});

bot.on('message',message => {
	let msg = message.content.toUpperCase();
	let sender=message.author;
	if (message.author.id!=bot.user.id)
	{
		let DM= message.channel.type;
		console.log(DM);
		var prefixcheck=msg.substring(0,1);
		
		if (prefix == prefixcheck || DM=="dm") 
		{
			if (prefix == prefixcheck)
			{	
				msg=msg.substring(1);
			}
			
			switch (msg)
			{
				case "PING":
					bot.channels.find("id",general).send("PONG");
				break;
				
				case "START":
					//bot.channels.find("id",general).send("QUIZ");
					StartQuiz(sender.name);
				break;
				
				case "HELP":
					//bot.channels.find("id",general).send("QUIZ");
					bot.channels.find("id",general).send("Use a * as prefix to let me react on your command or whisper me. Commands and answer is not case sensitive. Answers dont need prefix \n HELP - Shows this meny \n START - Starts a quiz \n STOP - Stops the current quest");
				break;
				
				case "STOP":
				    StopQuiz();
				break;
				
				default:
					if (DM=="dm")
					{
					    message.channel.send("Use a * as prefix to let me react on your command or whisper me. Commands and answer is not case sensitive. Answers dont need prefix \n HELP - Shows this meny \n START - Starts a quiz \n STOP - Stops the current quest");
					}
				break;
			}
			
		}
		if (QuizOnTheRun==1 && QuestionAsked==1)
		{
		    if (msg==RightAnswer)
		    {
		        clearTimeout(QuizThinkingtime);
                QuestionAsked=0;
                bot.channels.find("id",general).send(message + " was right answer by "+message.author.username+".");
                newwaitquest=setTimeout(function() { WaitToAskQuestion();}, 5000);
                 newuser=1;
			for (var i = 0; i < player.length; i++) {
							
				if (message.author.username==player[i])
				{
					score[i]=score[i]+1;
					scorecard=i;
					newuser=0;
				}
			}
			if (newuser==1)
				{
					player.push(message.author.username);
					score.push(1);
					//score[score.length]=1;
					scorecard=score.length-1;
				}
				bot.channels.find("id",general).send( message.author.username + " har nu svarat rätt " + score[scorecard] + " gånger. ");
		    }
		}
	}
});

bot.login(auth.token);