import { useState, useEffect } from "react";
import { JigsawGet } from "./JigsawGet";
import { doLogin,  } from "./jigsawLogic";

export const JigsawAuth = () => {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [needsAuth, setNeedsAuth] = useState(true);
 const [authError, setAuthError] = useState(false);

  const setAuth = () => {
  setNeedsAuth(!needsAuth);
}

const onUsernameChange = (e) => {
  setUsername(e.target.value);
  setAuthError(false);
}

const onPasswordChange = (e) => { 
  setPassword(e.target.value);
  setAuthError(false);
}


const doJigsawLogin = async function() { 
  if (username.length === 0 || password.length === 0) {
    setAuthError(true);
    return;
  }
  const token = doLogin(username, password);
  if (token.length === 0) {
    console.log('Error authenticating');
    setAuthError(true);
  } else {     
    setNeedsAuth(false);
  }
}







  return (
     needsAuth ?    
      <div class="govuk-form-group lbh-form-group">
      <label class="govuk-label lbh-label" for="input-example">
        Jigsaw Username
      </label>
      <input
        class="govuk-input lbh-input"
        id="input-example"
        name="test-name"
        type="text"
        value={username}
        onChange={onUsernameChange}
      />
      <label class="govuk-label lbh-label" for="input-example">
        Jigsaw Password
      </label>
      <input
        class="govuk-input lbh-input"
        id="input-example"
        name="test-name"
        type="text"
        value={password}
        onChange={onPasswordChange}
      />
      {authError && <span class="govuk-error-message lbh-error-message">Error validating credentials</span>}
      <button class="govuk-button lbh-button" data-module="govuk-button"onClick={doJigsawLogin}> Authenticate with Jigsaw
      </button>
    </div>  
    : <div><JigsawGet/></div>
      
  );
};


