﻿// Copyright 2013// Compiled (via JavascriptListener or ActionToJavascript Xtools…) by Stéphane Baril// enable double clicking from the Finder or Explorer#target photoshop//Make Photoshop the front most applicationapp.bringToFront();///////////////////////////////////////////////////// SETUP//////////////////////////////////////////////////////////////////////////////////////////////////////// MAIN////////////////////////////////////////////////////////////////////////////////////////////////////////FUNCTIONS///////////////////////////////////////////////////if (documents.length == 0) {    // alert("There are no documents open.");}else {        function contractSelect1px() {        // =======================================================        var idCntc = charIDToTypeID( "Cntc" );            var desc30 = new ActionDescriptor();            var idBy = charIDToTypeID( "By  " );            var idPxl = charIDToTypeID( "#Pxl" );            desc30.putUnitDouble( idBy, idPxl, 1.000000 );        executeAction( idCntc, desc30, DialogModes.NO );    };    //=========================================    //                    contractSelect1px.main    //=========================================    //    contractSelect1px.main = function () {      contractSelect1px();    };    app.activeDocument.suspendHistory("Contract the Selection: 1px", 'contractSelect1px.main()');    //contractSelect1px.main();}