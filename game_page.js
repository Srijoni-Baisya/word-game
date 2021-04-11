player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML=player1_name+" :   ";
document.getElementById("player2_name").innerHTML=player2_name+" :   ";

document.getElementById("player1_score").innerHTML="  "+player1_score;
document.getElementById("player2_score").innerHTML="  "+player2_score;

document.getElementById("player_question").innerHTML="Question Turn - "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn - "+player2_name;

function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("word in lower case : "+word);

    charAt_1=word.charAt(1);
    console.log("charAt_1 - "+charAt_1);

    length_divide=Math.floor(word.length/2);
    charAt_2=word.charAt(length_divide);
    console.log("charAt_2 - "+charAt_2);

    length_minus=word.length-1;
    charAt_3=word.charAt(length_minus);
    console.log("charAt_3 - "+charAt_3);

    remove_charAt1=word.replace(charAt_1,"_");
    remove_charAt2=remove_charAt1.replace(charAt_2,"_");
    remove_charAt3=remove_charAt2.replace(charAt_3,"_");
    console.log(remove_charAt3);

    question_word="<h4 id='word_display'>Q. "+remove_charAt3+"</h4>";
    input_box="<br>Answer : <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

question_turn="player1";
answer_turn="player2";