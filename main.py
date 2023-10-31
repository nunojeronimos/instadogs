from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__, static_folder='static')
app.secret_key = 'your_secret_key'

# Hardcoded username and password
valid_username = 'username'
valid_password = 'password'


@app.route("/")
def home():
    return render_template("index.html")

@app.route("/login", methods=['POST'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')

    if username == valid_username and password == valid_password:
        session['logged_in'] = True
        return redirect(url_for('dashboard'))
    else:
        return "Invalid login credentials"
    
@app.route("/dashboard")
def dashboard():
    if 'logged_in' in session and session['logged_in']:
        return render_template("dashboard.html")
    else:
        return "Access denied. Please log in first." 

@app.route("/logout")
def logout():
    session.pop('logged_in', None)
    return redirect(url_for('home'))      

if __name__ == '__main__':
    app.run(debug=True)