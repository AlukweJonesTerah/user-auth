// controllers/authController.js

const loginPage = async(req,res)=>{
    res.render('login')
}

const registerPage = async(req,res)=>{
    res.render('register')
}


const PostRegister = async (req, res) => {
    try {
        Object.keys(req.cookies).forEach(cookieName => {
            res.clearCookie(cookieName);
        });
        
        res.cookie("walletID", req.body.wallet_id);
        res.cookie("role", req.body.role);
        res.cookie("name", req.body.name);
        res.json("OK")
    } catch (error){
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Registration failed' });
    }
};

const PostLogin = async (req, res) => {
    try{
        Object.keys(req.cookies).forEach(cookieName => {
            res.clearCookie(cookieName);
        });
        
        res.cookie("walletID", req.body.wallet_id);
        res.cookie("role", req.body.role);
        res.cookie("name", req.body.name);
        res.json("OK")
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Login failed' });
    }
};

const logout = async(req,res)=>{
    res.clearCookie("name");
    res.clearCookie("role");
    res.clearCookie("walletID");
    res.redirect('/')
}

module.exports = {loginPage,registerPage,PostRegister,PostLogin,logout}
