const af_content = document.querySelectorAll(".af_grid_item");

var af_contentARR = Array.prototype.slice.call(af_content);

af_content.forEach(af_grid_item => {

    af_grid_item.addEventListener('click', function afClick(event) {


        var af_place = document.getElementById("dir_af");
        var af_check = af_contentARR.indexOf(af_grid_item);

        var af_def = ["A sudden attempt to get away from a rider or group of riders", "An embankment on a BMX track", "Another term for a crash", "A 5-centimeter-wide line at the bottom of a velodrome track which defines the length of the track", "When a rider impedes the progress of another rider, usually done as part of a team strategy to slow down the main field when a team member is ahead in a breakaway",
                      "The section between the racing surface on a velodrome and the infield. Technically, it’s not illegal to ride on the Blue Band, but it is illegal to advance one’s position while riding on it", "Abbreviation for Bicycle Motocross", "When a rider completely runs out of energy", "A rider or group of riders who has separated themselves ahead of the main pack", "When a rider or group of riders attempt to advance from a group of riders to one further ahead",
                      "The line of cars which typically follows a road race; includes team cars, race officials, media, medical, VIP and neutral support vehicles.", "Riders who are attempting to advance to a rider or group of riders ahead", "A series of tight, technical turns", "A multi-lap road race on a course usually a mile or less in length", "The traditional name for the team manager", "A rider who typically rides in support of a designated team leader", "Riding in the slipstream of another rider ahead. A rider drafting off another generally expands 30% less energy",
                      "To leave another rider or group of riders behind by attacking", "A line of riders positioned behind one another to receive maximum protection from the wind", "A crash which results in a rider going over the front handlebars", "A French term used to describe the Under-23 category of riders aged 19-22", "A French term for a stage of a stage race", "A designated section on a road course where riders can receive food and water from their soigneur.", "When riders receive food and liquids throughout a race, usually from a team car that follows the race or a soigneur positioned in the feed zone",
                      "The main group of riders, also known as the Pack, Peloton or Bunch", "The final sprint between the main group of riders in a race, not always for first place"];
        
        for (var i = 0; i <= af_contentARR.length; i++)
        {
            if (i == af_check)
            {
                af_place.innerHTML = af_def[i];
            }
        }
    });
});