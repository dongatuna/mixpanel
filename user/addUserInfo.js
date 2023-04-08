function createProfile (data){
    mixpanel.people.set({
        address: data.address,
        alert_preferences: data.alertPreferences,
        city: data.city,
        $distinct_id: data.hash,
        email: data.providerEmail,
        $name: `${data.name}`,
        settings: data.typeOfSettings,
        tel: data.tel,
        zipcode: data.zipcode
    });

    mixpanel.track('Create Profile', {
        $distinct_id: data.hash,
        added: new Date().toISOString(),
        user_id: data.userID
    })

}

function createResume(data){
    mixpanel.people.set({
        alert_preferences: data.alertPreferences,
        availability: data.availability,
        certification: data.certification,
        city: data.city,
        $distinct_id: data.hash,
        email: data.email,
        $name: `${data.profileFname} ${data.profileLname}`,
        licenses: data.licenses,
        tel: data.tel,
        zipcode: data.zipcode
    });

    mixpanel.track('Create Resume', {
        $distinct_id: data.hash,
        added: new Date().toISOString(),
        post_step: data.postStep,
        user_id: data.userID
    })
}