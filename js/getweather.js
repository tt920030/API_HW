$(function () {
    $.ajax({
        url: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=CWB-43A4C989-49F7-483E-ADE0-EF99F56D197E&locationName=%E6%9D%BE%E5%B1%B1%E5%8D%80&elementName=T",
        type: "GET",
        dataType: "json",
        success: function (resource) {
            // console.log(resource.records.locations[0].location[0].locationName);
            console.log(resource);
            let weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            $('#city_name').html(resource.records.locations[0].locationsName);
            $('#district').html(resource.records.locations[0].location[0].locationName);
            $('#tempture').html(resource.records.locations[0].location[0].weatherElement[0].time[0].elementValue[0].value + "&#176;");

            let j = 0;

            for (let i = 0; i < 10; i++){
                // console.log($('.block').eq(i).find('small').html());
                // console.log($('.block').eq(i).find('h6 strong').html());

                if((i % 2) == 0){
                    let T = resource.records.locations[0].location[0].weatherElement[0].time[i].elementValue[0].value;
                    let tempture = `<strong>${T}&#176</strong>`;
                    // console.log(tempture);
                    let wd = resource.records.locations[0].location[0].weatherElement[0].time[i].startTime;
                    
                    $('.block').eq(j).find('h6').html(tempture);
                    const d = new Date(wd);
                    let day = d.getDay();
                    $('.block').eq(j).find('small').html(weekday[day]);
                    j++;
                }
            }


        },
        error: function (error) {
            console.log(error);
        }
    });
});