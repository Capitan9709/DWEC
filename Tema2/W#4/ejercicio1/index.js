// W.4 -> 1

document.write("<h1>Tabla datos 'navigator'</h1>");

document.write("<table border='1'>");
    document.write("<tr>");
        document.write("<td>Lenguaje</td>");
        document.write("<td>");
        document.write(navigator.language);
        document.write("</td>");
    document.write("</tr>");
    document.write("<tr>");
        document.write("<td>Memoria (gigabytes)</td>");
        document.write("<td>");
        document.write(navigator.deviceMemory);
        document.write("</td>");
    document.write("</tr>");
    document.write("<tr>");
        document.write("<td>Estado Online</td>");
        document.write("<td>");
        document.write(navigator.onLine);
        document.write("</td>");
    document.write("</tr>");
    document.write("<tr>");
        document.write("<td>Plataforma</td>");
        document.write("<td>");
        document.write(navigator.platform);
        document.write("</td>");
    document.write("</tr>");
    document.write("<tr>");
        document.write("<td>Proveedor</td>");
        document.write("<td>");
        document.write(navigator.vendor);
        document.write("</td>");
    document.write("</tr>");
document.write("</table>");
