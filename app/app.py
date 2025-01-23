from flask import Flask, request, jsonify
import pickle
import pandas as pd
# Crear la app Flask
app = Flask(__name__)

@app.route('/', methods=['GET'])
def home():
    return "Bienvenido a la API Flask. Usa el endpoint /predict para realizar predicciones."

# Cargar el modelo preentrenado
with open("model.pkl", "rb") as file:
    model = pickle.load(file)
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Obtener los datos del cuerpo de la solicitud
        data = request.get_json()
        # Convertir los datos a un DataFrame
        input_data = pd.DataFrame([data])
        # Hacer la predicción
        prediction = model.predict(input_data)
        # Devolver la predicción como JSON
        return jsonify({'prediction': prediction[0]})
    except Exception as e:
        return jsonify({'error': str(e)})
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)