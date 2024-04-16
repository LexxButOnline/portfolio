import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";



export default function Parallax() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });

    function useParallax(value: MotionValue<number>, distance: number) {
        return useTransform(value, [0, 1], [-distance, distance]);
    }

    const y = useParallax(scrollYProgress, 800);

    return (
        <section id="parallax">



            <div className="container flex items-center justify-center mx-auto text-center font-medium text-2xl text-tertiary">
                <motion.div style={{ y }}>
                    AAAAAAAAAAAA
                </motion.div>
            </div>
            <div ref={ref} className="container mx-auto px-60 py-2 text-center  text-xl bg-primary rounded-sm  border-secondary border-4">



                <p>
                    Donut marzipan cotton candy topping cake gingerbread. Jelly-o gummi bears soufflé cookie muffin ice cream pie marshmallow bear claw. Pastry topping cotton candy topping muffin powder. Pastry wafer icing shortbread jujubes macaroon sweet roll brownie. Pie cheesecake gingerbread cookie halvah chocolate liquorice bear claw. Chupa chups cheesecake liquorice donut dessert marshmallow jelly-o bonbon. Icing pie marzipan toffee tart. Tiramisu shortbread chupa chups pie jelly beans halvah jelly beans marzipan cotton candy. Gummi bears caramels apple pie soufflé pie. Dessert wafer dessert bonbon brownie bonbon cake lollipop cake. Ice cream jujubes bonbon cupcake tart bonbon cheesecake candy. Topping sesame snaps pudding sweet roll cotton candy fruitcake. Pastry shortbread apple pie pie fruitcake pastry cotton candy liquorice. Tiramisu jelly pudding topping toffee danish dragée.
                </p>
                <p>
                    Apple pie candy canes cheesecake jelly danish gingerbread. Bonbon oat cake danish jelly-o cake macaroon cupcake. Wafer macaroon icing pudding danish. Muffin candy canes brownie carrot cake lollipop carrot cake tiramisu macaroon. Liquorice topping gummi bears danish pudding cake. Fruitcake toffee pie gummi bears candy canes. Tiramisu croissant muffin gummies fruitcake cake cookie pastry. Oat cake fruitcake macaroon croissant liquorice chocolate caramels. Chocolate bar shortbread marshmallow toffee ice cream chupa chups sesame snaps toffee bonbon. Shortbread gummi bears caramels toffee pie jelly dragée muffin toffee. Cake croissant pie gingerbread tiramisu. Tootsie roll biscuit tootsie roll wafer apple pie jelly beans shortbread dessert bear claw. Dessert sesame snaps powder marzipan liquorice oat cake. Pastry tart cupcake cake lollipop jelly topping topping lollipop.
                </p>
                <p>
                    Candy canes macaroon ice cream biscuit brownie cake jelly beans. Chocolate pudding ice cream croissant ice cream. Chocolate bonbon shortbread pastry gummies chocolate bar bonbon. Cotton candy chupa chups caramels lemon drops gingerbread cheesecake soufflé. Sweet roll gingerbread biscuit macaroon powder ice cream. Chocolate cake macaroon croissant danish chocolate biscuit carrot cake donut jelly beans. Lemon drops jelly-o gummies sweet roll gummies. Sesame snaps icing biscuit sweet tart halvah ice cream icing dragée. Chupa chups brownie lollipop cupcake biscuit soufflé cotton candy. Jelly beans brownie gummi bears jelly beans jelly pastry cupcake. Tiramisu croissant croissant marzipan donut cake dessert cake gingerbread. Wafer oat cake shortbread gingerbread gummi bears marzipan ice cream. Fruitcake cake danish soufflé powder liquorice. Pudding cotton candy gingerbread cake candy muffin.
                </p>
                <p>
                    Sesame snaps donut apple pie apple pie jelly ice cream. Chocolate cake sesame snaps lollipop cake oat cake jujubes wafer donut. Chocolate shortbread oat cake gingerbread sweet. Jujubes wafer cake pie dessert danish liquorice oat cake. Chupa chups dessert cupcake jujubes marzipan powder. Jelly beans pastry croissant soufflé soufflé chocolate bar lollipop. Oat cake tootsie roll jelly beans candy canes chocolate bar pastry croissant. Macaroon jelly shortbread jelly-o pie marshmallow. Shortbread halvah brownie donut bonbon. Pudding jelly gingerbread dessert chupa chups soufflé tiramisu. Gingerbread bonbon sesame snaps candy candy marzipan cupcake. Halvah sweet marzipan candy canes croissant tiramisu halvah apple pie. Bear claw gingerbread pudding liquorice gingerbread cotton candy marshmallow.
                </p>

            </div>

        </section >
    );
}