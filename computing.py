print ("Content-type: text/html\n\n")

import cgi

form = cgi.FieldStorage()

course1 = form.getvalue("c91")
course2 = form.getvalue("c92")
course3 = form.getvalue("c93")
course4 = form.getvalue("c94")
course5 = form.getvalue("c95")
course6 = form.getvalue("c96")

print (course1 + "From Python")


