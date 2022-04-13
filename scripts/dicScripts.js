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

const gl_content = document.querySelectorAll(".gl_grid_item");

var gl_contentARR = Array.prototype.slice.call(gl_content);

gl_content.forEach(gl_grid_item =>{

gl_grid_item.addEventListener('click', function glClick(event){


    var gl_place = document.getElementById("dir_gl");
    var gl_check = gl_contentARR.indexOf(gl_grid_item);

    var gl_def = ["The combination of gears used between the front chainring and the rear gear cluster", "The lowest gear ratio on a multi-speed bicycle, smallest chainring in front and largest in back", " A mountain bike which only has front suspension", "Taking the lead position out of the starting gate going into the first turn, used in BMX racing", "A sudden acceleration, often at the start of a sprint", "The final burst of speed in a sprint",
                  "French for Red Lantern, as found at the end of a railway train. Used to describe the last-placed rider in a race", "A team-oriented move in which one rider begins a sprint to give a head start to a teammate riding in his draft"]

    for (var i = 0; i <= gl_contentARR.length; i++)
    {
        if (i == gl_check)
        {
            gl_place.innerHTML = gl_def[i];
        }
    }
})
});

const ms_content = document.querySelectorAll(".ms_grid_item");

var ms_contentARR = Array.prototype.slice.call(ms_content);

ms_content.forEach(ms_grid_item =>{

ms_grid_item.addEventListener('click', function msClick(event){

    var ms_place = document.getElementById("dir_ms");
    var ms_check = ms_contentARR.indexOf(ms_grid_item);

    var ms_def = ["Used to describe a heat of a BMX race", "A bag filled with food, water and energy drinks distributed to riders in a feed zone", "Cycling’s term for a rookie at the professional level", "The main group of riders during a road race", "A mid-race contest in which riders sprint for points, cash or prizes during a criterium, sometimes used to animate a race.", " A short individual time trial at the beginning of a stage race; used to assign a leader’s jersey for the first stage",
                  "To take a turn at the front of a paceline and block the wind for other riders in the pack", "When a rider moves to the front of a paceline and takes his turn blocking the wind at the front", "When a rider moves to one side of a paceline to allow another rider to pull through.", "A vehicle that follows a race and picks up riders who are unable to finish", "A narrow off-road trail which is only wide enough for bikes to ride in a single-file formation", 
                  "When one rider refuses to take a pull and break the wind for a group in which he’s riding", "The pocket of air created by a moving rider, just as in automobile or motorcycle racing", "A mountain bike that has both front and rear suspension", "A French term for cycling’s equivalent of a trainer. A soigneur usually looks after the physical health of a rider and gives massages", "The sudden burst of speed before the race’s finish or an intermediate sprint point",
                  "The space between the Black Line and The Sprinter’s Line on the velodrome. A rider leading in this zone cannot be passed on the inside", "A 5-centimeter-wide line 90-centimeters above the Black Line", "A multi-day event which combines several races. The rider with the lowest cumulative time is declared the winner", "An amateur rider who gets an opportunity to compete with a professional team during the season in order to gain experience at the pro level"]

    for (var i = 0; i <= ms_contentARR.length; i++)
    {
        if (i == ms_check)
        {
            ms_place.innerHTML = ms_def[i]
        }
    }
})
});

const tz_content = document.querySelectorAll(".tz_grid_item");

var tz_contentARR = Array.prototype.slice.call(tz_content);

tz_content.forEach(tz_grid_item =>{

    tz_grid_item.addEventListener('click', function tzClick(event){

        var tz_place = document.getElementById("dir_tz");
        var tz_check = tz_contentARR.indexOf(tz_grid_item);

        var tz_def = ["A section on a mountain bike course where riders can exchange parts or receive mechanical assistance from others", "When a rider attacks the main pack and creates a solo breakaway", "An individual or team race against the clock", "A technique used in track racing in which competitors come to a complete standstill in order to force their opponent to take the lead",
                      "An oval, banked cycling track used for track racing", "A derogatory term used to describe someone who rides in a pack without taking a pull at the front and blocking the wind"]

        for (var i = 0; i <= tz_contentARR.length; i++)
        {
            if (i == tz_check)
            {
                tz_place.innerHTML = tz_def[i];
            }
        }

    });

});