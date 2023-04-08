function localSignUp(user){
    //
    mixpanel.alias(user.hash);
    //set super properties
    mixpanel.register({
        $email: user.email,
        $phone: user.tel,
        $distinct_id: user.hash,
        role: user.role,
    })
    //set the role as permanent property of the user
    mixpanel.people.set_once({
        role: user.role,
        $created: new Date().toISOString(),
        $distinct_id: user.hash,
    })

    mixpanel.people.set({
        $email: user.email,
        $phone: user.tel,
    })

    mixpanel.track('Sign Up', {
        auth_mode: user.authMode,
        type: user.type,
        $distinct_id: user.hash,
    })
}

function socialSignUp(user){
    //
    mixpanel.alias(user.hash);
    //set super properties
    mixpanel.register({
        $email: user.email,
        $phone: user.tel,
        $created: new Date().toISOString(),
        $distinct_id: user.hash,
        $first_name: user.socialFname,
        $last_name: user.socialLname
    })

    //set the role as permanent property of the user
    mixpanel.people.set_once({
        $created: new Date().toISOString(),
        $distinct_id: user.hash,
    })

    mixpanel.people.set({
      
        $email: user.email,
        $first_name: user.socialFname,
        $last_name: user.socialLname,
        $phone: user.tel,
    })

    mixpanel.track('Sign Up', {
        authMode: user.authMode,
        type: user.type,
        $distinct_id: user.hash,
    })
}

