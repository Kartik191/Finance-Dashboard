from flask import Flask, jsonify
import tensorflow_probability as tfp
import tensorflow as tf
import numpy as np
import pickle
import json

app = Flask(__name__)

# Load saved ARIMA model configuration
with open("tfp_arima_model.pkl", "rb") as f:
    saved = pickle.load(f)

# Reconstruct ARIMA model
arima = tfp.sts.AutoregressiveIntegratedMovingAverage(
    ar_order=saved["ar_order"],
    ma_order=saved["ma_order"],
    integration_degree=saved["integration_degree"],
    observed_time_series=None
)

# Convert parameter samples back to tensors
parameter_samples = {
    k: tf.convert_to_tensor(v, dtype=tf.float32)
    for k, v in saved["parameter_samples"].items()
}

# Revenue values since ARIMA uses previous values for forecast
with open('./data/kpis_revenue_only.json','r') as f:
    d = json.load(f)

STATIC_HISTORY = d 

@app.route('/predict', methods=['GET'])
def predict():
    history = np.array(STATIC_HISTORY, dtype=np.float32)
    forecast_dist = tfp.sts.forecast(
        model=arima,    # Model Obv
        observed_time_series=history,   # Revenue history
        parameter_samples=parameter_samples,    # Params
        num_steps_forecast=30   # Days to forecast for. Higher it is, more time and more drift.
    )
    return jsonify({
        "predictions": forecast_dist.mean().numpy().tolist()
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
