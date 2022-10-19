// W.4 -> 2

document.write("<h1>Tabla datos 'screen'</h1>");

document.write("<table border='1'>");
    document.write("<tr>");
        document.write("<td>Anchura</td>");
        document.write("<td>");
        document.write(screen.width+" px");
        document.write("</td>");
    document.write("</tr>");
    document.write("<tr>");
        document.write("<td>Altura</td>");
        document.write("<td>");
        document.write(screen.height+" px");
        document.write("</td>");
    document.write("</tr>");
    document.write("<tr>");
        document.write("<td>Profundidad de Color</td>");
        document.write("<td>");
        document.write(screen.colorDepth);
        document.write("</td>");
    document.write("</tr>");
document.write("</table>");
