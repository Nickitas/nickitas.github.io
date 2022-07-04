import React from 'react'
import classes from './Loading.module.scss'

const Loading = () => {
    return (
        <div className={classes.Loading}>
            <div className={classes.demo}>
            <div className={classes.circle}>
                <div className={classes.inner}></div>
            </div>
        </div>
        </div>
    )
}
export default Loading