// W.2 -> 7

document.write("<table border='1'>");
let count = 0;
for (let i = 0;i<=100;i++){
    document.write("<tr>");
    document.write("<td>"+count+"</td>");
    document.write("<td>"+Math.sin(count).toFixed(2)+"</td>");
    document.write("</tr>");
    count += 1;
}
document.write("</table>");
