#!C:\python27\python.exe
print ("Content-type: text/html\n\n")

import cgi

form = cgi.FieldStorage()

course1 = form.getvalue("c91")

print (course1 + "From Python")
