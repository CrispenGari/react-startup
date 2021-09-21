import React, { useState } from 'react'
import './Authentication.css'
import {Button} from '@material-ui/core'
import {Twitter, Facebook, GitHub, CloudCircle, Mail, Public, PersonOutline} from '@material-ui/icons'
import {auth, googleProvider, gitHubProvider, facebookProvider,yahooProvider, twitterProvider} from '../../firebase/firebase'

const Authentication = () => {
    const [error, setError]= useState("")
    const googleAuthentication=()=>{
        auth.signInWithPopup(googleProvider).then(result=>{
            setError("")
        }).catch(error=>{
            setError(error.message)
        })
    }
    const githubAuthentication=()=>{
        auth.signInWithPopup(gitHubProvider).then(result=>{
            setError("")
        }).catch(error=>{
            setError(error.message)
        })
    }
    const facebookAuthentication=()=>{
        auth.signInWithPopup(facebookProvider).then(result=>{
            setError("")
        }).catch(error=>{
            setError(error.message)
        })
    }
    const twitterAuthentication=()=>{
        auth.signInWithPopup(twitterProvider).then(result=>{
            setError("")
        }).catch(error=>{
            setError(error.message)
        })
    }
    const yahooAuthentication =()=>{
        auth.signInWithPopup(yahooProvider).then(result=>{
            setError("")
        }).catch(error=>{
            setError(error.message)
        })
    }
    const anonymouslySignIn =()=>{
        auth.signInAnonymously().then(result=>{
            setError("")
        }).catch(error=>{
            setError(error.message)
        })
    }
    const emailSignIn =()=>{
        auth.createUserWithEmailAndPassword("email", "password").then(()=>{
            setError("")
        }).catch(error=>{
            setError(error.message)
        })
    }
    return (
        <div className="authentication">
            <h1>Authenticate</h1>
            <small>To see you account authenticate using</small>
            <Button
            onClick={googleAuthentication}
                variant="contained"
                className="authentication__googlebtn authentication__btn"
                startIcon={<CloudCircle className="authentication__icon" />}
            >
                Google
            </Button>
            <Button
            onClick={facebookAuthentication}
                variant="contained"
                className="authentication__facebookbtn authentication__btn"
                startIcon={<Facebook className="authentication__icon" />}
            >
                Facebook
            </Button>
            <Button
            onClick={githubAuthentication}
                variant="contained"
                className="authentication__githubbtn authentication__btn"
                startIcon={<GitHub className="authentication__icon" />}
            >
                GitHub
            </Button>
            <Button
            onClick={twitterAuthentication}
                variant="contained"
                className="authentication__twitterbtn authentication__btn"
                startIcon={<Twitter className="authentication__icon"/>}
            >
                Twitter
            </Button>
            <Button
            onClick={yahooAuthentication}
                variant="contained"
                className="authentication__yahoobtn authentication__btn"
                startIcon={<Public className="authentication__icon" />}
            >
               Yahoo
            </Button>
            <Button
            onClick={anonymouslySignIn}
                variant="contained"
                className="authentication__anonymousbtn authentication__btn"
                startIcon={<PersonOutline className="authentication__icon" />}
            >
              Sign In Anonymously
            </Button>
            <Button
            onClick={emailSignIn}
                variant="contained"
                className="authentication__emailbtn authentication__btn"
                startIcon={<Mail className="authentication__icon" />}
            >
               Email
            </Button>
            <small className="authentication__error">{error}</small>
            <small>Developed by Crispen Gari</small>
        </div>
    )
}
export default Authentication
