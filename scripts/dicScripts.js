const g = document.getElementsByClassName("af_grid_item");


for (var i = 0; i <= g.length; i++)
{

    g[0].onclick = function fun (){
        console.log(g[0].innerHTML);
    }
}



// const af_content = document.querySelectorAll(".af_grid_item");
// af_content.forEach(af_grid_item => {
    
//     af_grid_item.addEventListener('click', function afClick(event) {

//         var af_check = af_grid_item.innerHTML.toString();
//         var place = document.getElementById("dir_af")

//         console.log(af_content[3].innerHTML);
//         console.log(af_check);
//         console.log(place);

//         switch (af_check)
//         {
//             case "Attack":
//                 place.innerHTML = "A sudden attempt to get away from a rider or group of riders";
//             break;

//             case "Berm":
//                 place.innerHTML = "An embankment on a BMX track"
//             break;

//             case "Biff":
//                 place.innerHTML = "Another term for a crash"
//             break;

//             case "Black Line":
//                 place.innerHTML = "A 5-centimeter-wide line at the bottom of a velodrome track which defines the length of the track"
//             break;

//             case "Blocking":
//                 place.innerHTML = "When a rider impedes the progress of another rider, usually done as part of a team strategy to slow down the main field when a team member is ahead in a breakaway"
//             break;

//             case "Blue Band":
//                 place.innerHTML = "The section between the racing surface on a velodrome and the infield. Technically, it’s not illegal to ride on the Blue Band, but it is illegal to advance one’s position while riding on it"
//             break;

//             case "BMX":
//                 place.innerHTML = "Abbreviation for Bicycle Motorcross"
//             break;

//             case "Bonk":
//                 place.innerHTML = "When a rider completely runs out of energy"
//             break;

//             case "Breakaway":
//                 place.innerHTML = "A rider or group of riders who has separated themselves ahead of the main pack"
//             break;

//             default:
//                 console.log(af_check);
//         }
        


//     });
    
    
    
// });