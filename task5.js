var inputArray = [["张三","95","80","75","80"],["李四","80","70","85","90"]];
var score = Score();
var personalcount = PersonalCount(score);
var allcountaverage = AllCountAverage(personalcount);
var countmedian = CountMedian(personalcount);
var personalcountsorted = personalcount.sort();
//#5

function typeout(inputArray,AverageArray,CountArray,AllCountAverage,CountMedian) {
    
    var inputArray = [["张三","95","80","75","80"],["李四","80","70","85","90"]];
    console.log("成绩单\n姓名|数学|语文|英语|编程|平均分|总分\n===========================\n%s|%s|%s|%s|%s|%s|%s\n%s|%s|%s|%s|%s|%s|%s\n===========================\n全班总平均分：%s\n全班总分中位数：%s\n",inputArray[0][0],score[0][0],score[0][1],score[0][2],score[0][3],PersonalAverage(score)[0],personalcount[0],inputArray[1][0],score[1][0],score[1][1],score[1][2],score[1][3],PersonalAverage(score)[1],personalcount[1],allcountaverage,countmedian);


}
typeout();


//#0

function Score() {
    
    var Score = inputArray;
    for (i = 0; i < inputArray.length; i++) {
        Score[i].shift();
    }
    
    return Score;
}

//#1

function PersonalAverage(score) {
    var AverageArray = new Array();
    for (i = 0; i < score.length; i++) {
        AverageArray.push((parseInt(score[i][0]) + parseInt(score[i][1]) + parseInt(score[i][2]) + parseInt(score[i][3])) / 4)
    }
    return AverageArray;
}


//8min
//target:5min

//#2

function PersonalCount(score) {
    var CountArray = new Array();
    for(i = 0;i < score.length;i++) {
        CountArray.push(parseInt(score[i][0]) + parseInt(score[i][1]) + parseInt(score[i][2]) + parseInt(score[i][3]));
    }
    return CountArray;
}


//5min
//target:5min

//#3

function AllCountAverage(personalcount) {
    var AllCount = 0;
    var AllCountAverage = 0;
    for(i = 0;i < personalcount.length;i++) {
        AllCount += personalcount[i];
    }
    AllCountAverage = AllCount / personalcount.length;
    return AllCountAverage;
}

//6min
//target:5min

//#4

function CountMedian(personalcount) {
    var CountMedian = 0;
    
    if(personalcount.length % 2 == 0) {
        CountMedian = (personalcount[(personalcount.length) / 2 - 1 ] + personalcount[(personalcount.length) / 2 ]) / 2;
    }
    else {
        CountMedian = personalcount[(personalcount.length ) / 2];
    }
    return CountMedian;
}

//16min
//target:15min


