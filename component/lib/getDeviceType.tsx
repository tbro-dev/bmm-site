const getDeviceType = () => {
    const userAgent = navigator.userAgent.toLowerCase();

    if (/mobile|iphone|ipod|android|blackberry|iemobile|opera mini/.test(userAgent)) {
        return "Mobile";
    }
    else if (/tablet|ipad|playbook|silk/.test(userAgent)) {
        return "Tablet";
    }
    else {
        return "Desktop";
    }
}

export default getDeviceType