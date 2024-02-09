from flask import Flask, render_template, request, redirect, url_for
import datetime
import threading
import time

app = Flask(__name__)

# Global variable to check if the alarm should stop
stop_alarm = False

def alarm(set_alarm_timer, coding_problem):
    global stop_alarm
    while not stop_alarm:
        current_time = datetime.datetime.now().strftime("%H:%M:%S")
        if current_time == set_alarm_timer:
            print("Time to solve the coding problem!")
            stop_alarm = True  # Stop the alarm
            break
        time.sleep(1)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/set_alarm', methods=['POST'])
def set_alarm():
    global stop_alarm
    stop_alarm = False  # Reset the stop_alarm flag
    alarm_time = request.form['alarm_time']
    coding_problem = request.form['coding_problem']

    # Start the alarm thread
    alarm_thread = threading.Thread(target=alarm, args=(alarm_time, coding_problem))
    alarm_thread.start()

    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
