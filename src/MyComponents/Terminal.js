import React from 'react'

export default function Terminal() {
    return (
        <div style={{
    color: 'white',
    fontFamily: 'DM Mono, Monospace', 
    justifyContent: 'center',
    margin: 'auto',
    marginBottom: '30px'}}>
    <p style={{
        textAlign: 'center',
        marginTop: '40px',
        marginBottom: '40px',
        fontWeight: '600',
    }}>
        <span style={{color: '#00AA00'}}>root</span>
        <span style={{color: '#fff'}}>@</span>
        <span style={{color: '#d41919'}}>cybrdise</span>
        <span style={{color: '#00AA00'}}>: # </span>
        <span className="cursor">_</span>
    </p>

    <div style={{
        alignItems: 'center',
        // minWidth: '300px',
        maxWidth: '320px',
        // textAlign: 'left',
        // maxWidth: '370px',
        padding: '10px',
        paddingBottom: '20px',
        marginTop: '40px',
        margin: 'auto',
        backgroundColor: '#1E1E1E',
        fontFamily: 'DM Mono, monospace',
        borderRadius: '5px',
    }}>

        <div style=
            {{marginTop: '8px',
            marginBottom: '15px',
            marginLeft: '8px',
            display: 'flex',
            flexDirection: 'row',}}
        >
            <span style={{margin: '3px', width: '12px', height: '12px', display: 'inline-block', padding: '1px', borderRadius: '100%',backgroundColor:'#c31a1a'}}></span>
            <span style={{margin: '3px', width: '12px', height: '12px', display: 'inline-block', padding: '1px', borderRadius: '100%',backgroundColor:'#E8C700'}}></span>
            <span style={{margin: '3px', width: '12px', height: '12px', display: 'inline-block', padding: '1px', borderRadius: '100%',backgroundColor:'#00830B'}}></span>
        </div>

        <div style={{marginLeft: '8px',
            fontSize: '18px',}}>
            <span style={{
            marginLeft: '3px',
            marginRight: '3px', color:'#00AA00',}}>$
            </span>

            <span>sudo </span>

            <span
            class="txt-rotate"
            data-period="1000"
            data-rotate='[
            "apt upgrade",
            "pacman -Syu",
            "dnf upgrade",
            "brew upgrade",
            "choco upgrade"]
            '>
            </span>

            <span className="cursortwo">▮ </span>

        </div>

    </div>

    <div style={{
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        fontSize: '18px',
        marginTop: '30px',
    }}>An
       <span style={{color: '#50FA7B', fontWeight: '500'}}> upgrade </span>
    is all you need.
    </div>
    
</div>
    )
}
