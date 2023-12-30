var resources = [
    //{
    //     id: 'a',
    //     title: 'Docter A'
    // }, {
    //     id: 'b',
    //     title: 'Docter B'
    // },
    // {
    //     id: 'c',
    //     title: 'Docter C'
    // }
];

var events = [
    //{
    //     title: 'Anushri',
    //     start: '2023-12-29T10:30:00',
    //     end: '2023-12-29T11:00:00',
    //     description: 'Meeting',
    //     resourceId: 'a',

    // },
    // {
    //     title: 'Anu',
    //     start: '2023-12-29T15:30:00',
    //     end: '2023-12-29T16:00:00',
    //     description: 'Meeting2',
    //     resourceId: 'a'
    // },
    // {
    //     title: 'Anu',
    //     start: '2023-12-29T13:30:00',
    //     end: '2023-12-29T14:00:00',
    //     description: 'Meeting2',
    //     resourceId: 'c'
    // },
    // {
    //     title: 'Anu',
    //     start: '2023-12-29T11:30:00',
    //     end: '2023-12-29T14:00:00',
    //     description: 'Meeting2',
    //     resourceId: 'b',
    //     backgroundColor: 'voilet'
    // }
];

var calendarEl = document.getElementById("calendar");

var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'resourceTimeGridDay',
    resources: resources,
    allDaySlot: false,
    slotMinTime: "9:00:00",
    slotMaxTime: "21:00:00",
    events: events,
    editable: true,
    nowIndicator: true,
    eventColor: 'black',



});

calendar.render();
$('.btn-primary').click(a => {
    drId = $("#drId").val();
    var drName = $("#drName").val();
    var drObj = {
        id: drId,
        title: drName
    }
    calendar.addResource(drObj);

});
$('#sub').click(a => {
    var paEmId = $("#PatEml").val();
    var patName = $("#PatName").val();
    var sStart = $("#ADST").val();
    var eEnd = $("#ADET").val();
    var mobile = $("#Mob").val();

    var patObj = {
        title: patName,
        start: sStart,
        end: eEnd,
        description: mobile,
        resourceId: drId,

    }
    console.log(patObj);
    calendar.addEvent(patObj);
});