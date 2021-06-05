var items = $("#items");

$('form button').click(function(e){

    let roll = $('#roll');
    let name = $('#name');
    let marks = $('#marks');

    let rollval = roll.val();
    let nameval = name.val();
    let marksval = marks.val();

    e.preventDefault();

    if (rollval === ""  || nameval===""  || marksval===""){
        alert("Please fill every feild");
    }
    else{
        let item = '<div class="items">Roll no - <span class="highlight">' + rollval + '</span> , <span class="highlight">' + nameval + '</span> have got <span class="highlight">' + marksval + '</span> marks</div>';
        items.append(item);
        rollval  = "";
        nameval = "";
        marksval = "";
    }

})