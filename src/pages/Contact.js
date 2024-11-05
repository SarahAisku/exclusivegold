import React from "react";

function Contact() {
  return (
    <div className="Care">
        <h1 className="Care-h1">Контакты</h1>
        
        <p className="Contact-Address">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-geo-alt"
            viewBox="0 0 16 16"
            style={{marginRight: '7px'}}
        >
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        </svg>
        <a href='https://go.2gis.com/2velea' style={{color: "#000"}}>
            {" "}
            Казахстан, г. Алматы, ул. Кабдолова 1/3, 1 этаж, 115 бутик - ТЦ
            "Золотой базар"
        </a>
        </p>

        <p>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-clock"
            viewBox="0 0 16 16"
            style={{marginRight: '7px'}}
        >
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
        </svg>
        <a href="https://www.instagram.com/exclusive_gold_almaty_/" style={{color: "#000"}}> Время работы: 10:00-20:00, без выходных</a>
        </p>

        <p>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-telephone"
            viewBox="0 0 16 16"
            style={{marginRight: '2px'}}
        >
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
        </svg>
        <a href="https://wa.me/+77027924000?text=%D0%AF%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BA%D1%83%D0%BF%D0%B8%D1%82%D1%8C%20%D0%B1%D0%B8%D0%B6%D1%83%D1%82%D0%B5%D1%80%D0%B8%D1%8E%20%D0%B2%20Exclusive%20Gold" style={{color: "#000"}}> +7-702-792-4000, +7-701-619-7775</a>
        </p>

        <p>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-envelope"
            viewBox="0 0 16 16"
            style={{marginRight: '7px'}}
        >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
        </svg>
        <a href="mailto:exclusive.gold.almaty@gmail.com" style={{color: "#000"}}> exclusive.gold.almaty@gmail.com</a>
        </p>

        <iframe title="Contact Map" className="Contact-map"src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11626.797052923686!2d76.8496995!3d43.2367646!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883694a855555c7%3A0x5f587b51d6854ad4!2sExclusive%20Gold!5e0!3m2!1sru!2skz!4v1688848800799!5m2!1sru!2skz" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        
    </div>
  );
}

export default Contact;
