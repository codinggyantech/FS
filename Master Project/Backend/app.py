import json
from flask import Flask,jsonify,request
from EmployeeDB import DBdetails
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
db = DBdetails()

@app.route("/")
def welcome():
    return "Welcome to Employee details Application...!"

@app.post("/employees")
def createNewEmployee():
    request_data = request.get_json()
    
    response =  db.insert_employee(request_data["id"],request_data["name"],request_data["desg"],request_data["did"],request_data["dname"],request_data["award"],request_data["salary"],request_data["skills"])
    if response:
      return jsonify(response,request_data)
    else:
        return {"status":response,"message":"user already exist"}

@app.put("/employees")
def updateNewEmployee():
    request_data = request.get_json()
    data = db.update_employee(request_data["id"],request_data["name"],request_data["desg"],request_data["did"],request_data["dname"],request_data["award"],request_data["salary"],request_data["skills"])
    if data:
        return jsonify(data)
    else:
        data = {
            "status":"Success!",
            "message":"Employee Updated Sucessfully!"
        }
    return data
    
    


@app.route("/employee/<eid>/<ename>/<desg>/<did>/<dname>/<award>/<salary>/<skills>",methods=['POST'])
def create_employee(eid,ename,desg,did,dname,award,salary,skills):
    

    db.insert_employee(eid,ename,desg,did,dname,award,salary,skills)
    data = {
        "eid":eid,
        "ename":ename,
        "desg":desg,
        "did":did,
        "dname":dname,
        "award":award,
        "salary":salary,
        "skills":skills
    }
    return {"data":data,"status":"Success!","message":"Employee Created Successfully!"}
    # return jsonify(request_data)

@app.route("/employees",methods = ['GET'])
def show_employees():
    allemployeees = []
    res = db.fetch_all_employees()
    print(len(res),res)
    for i in range(len(res)):
        data = {
            "eid":res[i][0],
            "ename": res[i][1],
            "desg": res[i][2],
            "did": res[i][3],
            "dname": res[i][4],
            "award": res[i][5],
           
           
        }
        allemployeees.append(data)
   
    return jsonify(allemployeees)

@app.route("/employee/<eid>",methods = ['GET'])
def show_one_employee(eid):
    res = db.fetch_one_employee(eid)
    print("From api",res)
    if res:
        data = {
        "status": "success",
        "eid":res[0],
        "ename": res[1],
        "desg": res[2],
        "did": res[3],
        "dname": res[4],
        "award": res[5],
        "salary": res[6],
        "skills": res[7]
       }


        return jsonify(data)
    else:
        data = {
            "data":"data not found!",
            "status":"Status Error!"
        }
        return jsonify(data)


@app.route("/employee/<EmployeeId>",methods = ['DELETE'])
def delete_employee(EmployeeId):
    data = db.delete_employee(EmployeeId)
    print(data)
    if data:
        data = {
            "status":"Error!",
            "message":"No EmployeeId in data!"
        }
        return data
    else:
        data = {
            "data":"data deleted successfully!",
            "status":"success!"
        }
        return data

@app.route("/employee/<EmployeeId>/<newName>/<newDesg>/<newDid>/<newDname>/<newAwards>/<newSalary>/<newSkills>",methods = ['PUT'])
def update_employee(EmployeeId,newName,newDesg,newDid,newDname,newAwards,newSalary,newSkills):
    data = db.update_employee(EmployeeId,newName,newDesg,newDid,newDname,newAwards,newSalary,newSkills)
    if data:
        return jsonify(data)
    else:
        data = {
            "status":"Success!",
            "message":"Employee Updated Sucessfully!"
        }
    return data


@app.route("/employees/<did>",methods = ['GET'])
def show_one_departmentname(did):
    data = db.fetch_departmentname(did)
    if data:
        return jsonify(data)
    else:
        data = {
            "data":"data not found please enter correct departmentname!",
            "status":"Error!"
        }
        return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)