"use strict";var t=textures.lines().size(4).strokeWidth(1).stroke("darkorange"),t2=textures.lines().orientation("vertical","horizontal").size(4).strokeWidth(1).shapeRendering("crispEdges").stroke("darkorange"),g=textures.lines().heavier(10).thinner(1.5),svg=d3.select("svg");svg.call(t),svg.call(t2),svg.call(g),svg.selectAll("#hair path").attr("fill",t.url()),svg.selectAll("#sweater").attr("fill",g.url());var glow=function(){svg.selectAll("#cherry").attr("stroke","red").transition().attr("stroke","orange").transition().attr("stroke","red").each("end",glow)},backgrounds=function(){d3.select("body").attr("class","cell").transition().duration(500).attr("class","particle").transition().duration(500).attr("class","jelly").transition().duration(500).attr("class","blobbs").transition().duration(500).attr("class","chase").transition().duration(500).each("end",backgrounds)},hair=function(){svg.selectAll("#hair path").attr("fill",t.url()),setTimeout(function(){svg.selectAll("#hair path").attr("fill",t2.url())},1e3),setTimeout(function(){svg.selectAll("#hair path").attr("fill",t.url()),hair()},2e3)};glow(),backgrounds(),hair();