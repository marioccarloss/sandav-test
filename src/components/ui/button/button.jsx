import styles from './button.module.css';

const Button = ({ children, variant = 'primary', ...props }) => {
  const buttonClasses = `${styles.button} ${styles[variant] || styles.primary}`;

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
