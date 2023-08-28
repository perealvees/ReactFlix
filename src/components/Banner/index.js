import styles from "./Banner.module.css";

function Banner ({images}) {
    return (
        <div className={styles.banner}
            style={{ backgroundImage: `url('/images/banner-${images}.png')`}}

        ></div>
    );
}

export default Banner;