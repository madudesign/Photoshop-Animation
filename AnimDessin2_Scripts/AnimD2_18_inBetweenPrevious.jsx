﻿// Copyright 2013// Compiled (via JavascriptListener or ActionToJavascript Xtools…) by Stéphane Baril// enable double clicking from the Finder or Explorer#target photoshop//Make Photoshop the front most applicationapp.bringToFront();///////////////////////////////////////////////////// SETUP//////////////////////////////////////////////////////////////////////////////////////////////////////// MAIN////////////////////////////////////////////////////////////////////////////////////////////////////////FUNCTIONS///////////////////////////////////////////////////function inBetweenPrevious() {    // =======================================================    var idmove = charIDToTypeID( "move" );        var desc9 = new ActionDescriptor();        var idnull = charIDToTypeID( "null" );            var ref5 = new ActionReference();            var idLyr = charIDToTypeID( "Lyr " );            var idOrdn = charIDToTypeID( "Ordn" );            var idTrgt = charIDToTypeID( "Trgt" );            ref5.putEnumerated( idLyr, idOrdn, idTrgt );        desc9.putReference( idnull, ref5 );        var idT = charIDToTypeID( "T   " );            var ref6 = new ActionReference();            var idLyr = charIDToTypeID( "Lyr " );            var idOrdn = charIDToTypeID( "Ordn" );            var idPrvs = charIDToTypeID( "Prvs" );            ref6.putEnumerated( idLyr, idOrdn, idPrvs );        desc9.putReference( idT, ref6 );    executeAction( idmove, desc9, DialogModes.NO );    // =======================================================    var idpreviousFrame = stringIDToTypeID( "previousFrame" );        var desc40 = new ActionDescriptor();        var idtoNextWholeSecond = stringIDToTypeID( "toNextWholeSecond" );        desc40.putBoolean( idtoNextWholeSecond, false );    executeAction( idpreviousFrame, desc40, DialogModes.NO );};//=========================================//                    inBetweenPrevious.main//=========================================//inBetweenPrevious.main = function () {  inBetweenPrevious();};app.activeDocument.suspendHistory("Move the InBetween in Previous position", 'inBetweenPrevious.main()');