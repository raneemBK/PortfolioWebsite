function True(id){
    var image =document.getElementById(id);
    image.src = "../Assets/Images/true.jpg";
}

function Plus(id){
    if (id === 'plus1'){
        var structure = document.getElementById("structure");
        var image1 = document.getElementById("image1");
        image1.src = "../Assets/Images/dataStructure.png";
        var before = document.getElementById("before");
        structure.insertBefore(before,image1)
        //structure.append(image1);
        var oracle = document.getElementById("oracle");
        var image2 = document.getElementById("image2");
        image2.src = "../Assets/Images/oracle.png";
        var before2 = document.getElementById("before2");
        structure.insertBefore(before2,image2)
    }
}