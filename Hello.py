from flask import Flask , render_template ,request
import numpy as np
from flask_cors import CORS
import pickle as pkl
app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_world():
#    model = pkl.load(open('MIPML.pkl','rb'))
#    input_data = (20,1,20,2,1,2)
#    input_data= np.asarray(input_data)
#    input_data=input_data.reshape(1,-1)
#    predicted=model.predict(input_data)
#    print(predicted)
   return render_template("inputpage.html")

@app.route("/output", methods=['GET', 'POST'])
def output():
   if request.method == 'POST':
      data = request.json['data']
      model = pkl.load(open('MIPML.pkl','rb'))
      # input_data = (20,1,20,2,1,2)
      print(data)

      input_data= np.asarray(data)
      input_data=input_data.reshape(1,-1)
      predicted=model.predict(input_data)
      print(predicted)
      return {'predicted_value': str( round(predicted[0],2))}

if __name__ == '__main__':
   app.run(debug=True)