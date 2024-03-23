from flask import Flask, request, jsonify
import pickle
import xgboost as xgb
import pandas as pd

app = Flask(__name__)

@app.route('/predict', methods=['GET','POST'])
def calculate_sum():
    # Check if the request contains JSON data
    if request.is_json:
        try:
            # Get the array of numbers from the request JSON data
            numbers = request.json['numbers']
            print(numbers)
            numbers = pd.DataFrame([numbers], columns=['engine_no', 'op_setting_1', 'op_setting_2', 'op_setting_3', 'sensor_1',
       'sensor_2', 'sensor_3', 'sensor_4', 'sensor_5', 'sensor_6', 'sensor_7',
       'sensor_8', 'sensor_9', 'sensor_10', 'sensor_11', 'sensor_12',
       'sensor_13', 'sensor_14', 'sensor_15', 'sensor_16', 'sensor_17',
       'sensor_18', 'sensor_19', 'sensor_20', 'sensor_21'])
            with open("xgb.pkl","rb") as file:
                model=pickle.load(file)
            pred=model.predict(numbers)    
            print("pres is: ",pred)  
            ans=max(pred[0],0)          
            
            return jsonify({'rul':str(round(ans*144,0)) }), 200
        except KeyError:
            return jsonify({'error': 'Invalid JSON data. Please provide an array of numbers in the "numbers" field.'}), 400
        except Exception as e:
            return jsonify({'error': str(e)}), 500
    else:
        return jsonify({'error': 'Request data must be in JSON format.'}), 400

@app.route('/getsensor',methods=['GET', 'POST'])
def get_sensor_data():
    return "ja na lavde"
if __name__ == '__main__':
    app.run(debug=True)
