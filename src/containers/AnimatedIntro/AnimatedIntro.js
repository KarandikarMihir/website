import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProgressiveImage from 'react-progressive-image'
import paths from 'constants/paths'
import * as StorageManager from 'utils/StorageManager'
import { Wrapper, Images, Glasses, StartButton, Skip } from './fragments'

const SPACEBAR = 32
const ENTER = 13

const Content = ({ heroes, onPressStart, alwaysSkip }) => (
    <React.Fragment>
        <audio src={require('media/intro.mp3')} autoPlay />
        <Wrapper>
            <Images>
                <Glasses src={require('media/thug.png')} />
                <img src={heroes} style={{ width: 250 }} alt="Iddqd" />
            </Images>
            <br />
            <Link to={paths.MENU} style={{ textDecoration: 'none' }}>
                <StartButton>{'PRESS START'}</StartButton>
            </Link>
            <Skip onClick={alwaysSkip}>{'Always skip ?'}</Skip>
        </Wrapper>
    </React.Fragment>
)

const AnimatedIntro = props => {
    useEffect(() => {
        if (StorageManager.hasDisabledIntro()) {
            props.history.push(paths.MENU)
        }

        document.addEventListener('keyup', onPressStart)

        return () => {
            document.removeEventListener('keyup', onPressStart)
        }
    })

    const onPressStart = e => {
        if (e.keyCode === SPACEBAR || e.keyCode === ENTER) {
            props.history.push(paths.MENU)
        }
    }

    const alwaysSkip = () => {
        StorageManager.disableIntro()
        props.history.push(paths.MENU)
    }

    return (
        <ProgressiveImage src={require('media/contra.png')}>
            {(src, loading) =>
                loading ? null : (
                    <Content
                        heroes={src}
                        onPressStart={onPressStart}
                        alwaysSkip={alwaysSkip}
                    />
                )
            }
        </ProgressiveImage>
    )
}

export default AnimatedIntro
