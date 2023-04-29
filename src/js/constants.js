import {Path, Vector3} from 'yuka';
import {Vector3 as Vec3, Audio, AudioListener, AudioLoader} from 'three';

const YELLOWVEHICLESPATHS = [];
const REDVEHICLESPATHS = [];
const BLUEVEHICLESPATHS = [];

const yellowV1 = new Path();
yellowV1.add(new Vector3(5.91, 0.3, 125.92));
yellowV1.add(new Vector3(5.72, 0.3, 93.68));
YELLOWVEHICLESPATHS.push(yellowV1);

const yellowV2 = new Path();
yellowV2.add(new Vector3(6.21, 0.3, 30.19));
yellowV2.add(new Vector3(7.07, 0.3, 24.66));
yellowV2.add(new Vector3(33.32, 0.3, 24.36));
YELLOWVEHICLESPATHS.push(yellowV2);

const yellowV3 = new Path();
yellowV3.add(new Vector3(93.03, 0.3, 24.50));
yellowV3.add(new Vector3(102, 0.3, 22.84));
yellowV3.add(new Vector3(102.42, 0.3, -1.27));
YELLOWVEHICLESPATHS.push(yellowV3);

const yellowV4 = new Path();
yellowV4.add(new Vector3(102.50, 0.3, -66));
yellowV4.add(new Vector3(99.92, 0.3, -73.97));
yellowV4.add(new Vector3(76.00, 0.3, -75.41));
YELLOWVEHICLESPATHS.push(yellowV4);

const yellowV5 = new Path();
yellowV5.add(new Vector3(11.86, 0.3, -75.86));
yellowV5.add(new Vector3(5.98, 0.3, -75.96));
yellowV5.add(new Vector3(5.63, 0.3, -102.59));
YELLOWVEHICLESPATHS.push(yellowV5);

const yellowV6 = new Path();
yellowV6.add(new Vector3(5.97, 0.3, -161.04));
yellowV6.add(new Vector3(4.55, 0.3, -169.50));
yellowV6.add(new Vector3(-20.11, 0.3, -170.21));
YELLOWVEHICLESPATHS.push(yellowV6);

const yellowV7 = new Path();
yellowV7.add(new Vector3(-82.82, 0.3, -171.17));
yellowV7.add(new Vector3(-115.08, 0.3, -170.50));
YELLOWVEHICLESPATHS.push(yellowV7);

//Red cars

const redV1 = new Path();
redV1.add(new Vector3(1.38, 0.3, 109.32));
redV1.add(new Vector3(3.91, 0.3, 118.82));
redV1.add(new Vector3(27.74, 0.3, 119.04));
REDVEHICLESPATHS.push(redV1);

const redV2 = new Path();
redV2.add(new Vector3(1.13, 0.3, 14.01));
redV2.add(new Vector3(3.70, 0.3, 22.64));
redV2.add(new Vector3(26.53, 0.3, 24.73));
REDVEHICLESPATHS.push(redV2);

const redV3 = new Path();
redV3.add(new Vector3(107.50, 0.3, 20.33));
redV3.add(new Vector3(102.63, 0.3, 18.32));
redV3.add(new Vector3(102.45, 0.3, -8.42));
REDVEHICLESPATHS.push(redV3);

const redV4 = new Path();
redV4.add(new Vector3(97.45, 0.3, -81.35));
redV4.add(new Vector3(97.98, 0.3, -50.34));
REDVEHICLESPATHS.push(redV4);

const redV5 = new Path();
redV5.add(new Vector3(-3.55, 0.3, -71.24));
redV5.add(new Vector3(5.51, 0.3, -73.10));
redV5.add(new Vector3(6.15, 0.3, -97.01));
REDVEHICLESPATHS.push(redV5);

const redV6 = new Path();
redV6.add(new Vector3(1.45, 0.3, -175.84));
redV6.add(new Vector3(-0.64, 0.3, -170.20));
redV6.add(new Vector3(-25.56, 0.3, -170.28));
REDVEHICLESPATHS.push(redV6);

const redV7 = new Path();
redV7.add(new Vector3(-98.74, 0.3, -166.74));
redV7.add(new Vector3(-67.84, 0.3, -166.61));
REDVEHICLESPATHS.push(redV7);

//Blue cars

const blueV1 = new Path();
blueV1.add(new Vector3(-3.55, 0.3, 119.5));
blueV1.add(new Vector3(33.29, 0.3, 118.85));
BLUEVEHICLESPATHS.push(blueV1);

const blueV2 = new Path();
blueV2.add(new Vector3(-4.08, 0.3, 24.64));
blueV2.add(new Vector3(39.31, 0.3, 24.53));
BLUEVEHICLESPATHS.push(blueV2);

const blueV3 = new Path();
blueV3.add(new Vector3(98.08, 0.3, 14.95));
blueV3.add(new Vector3(98.53, 0.3, 45.91));
BLUEVEHICLESPATHS.push(blueV3);

const blueV4 = new Path();
blueV4.add(new Vector3(93.599, 0.3, -70.83));
blueV4.add(new Vector3(101.51, 0.3, -75.48));
blueV4.add(new Vector3(102.25, 0.3, -96.45));
BLUEVEHICLESPATHS.push(blueV4);

const blueV7 = new Path();
blueV7.add(new Vector3(-88.88, 0.3, -160.78));
blueV7.add(new Vector3(-89, 0.3, -192.14));
BLUEVEHICLESPATHS.push(blueV7);

const ANSWERSTEXT = [
    {
        question: 'Q1: in which order may the vehicles proceed?',
        answer1: 'Blue, yellow, red',
        answer2: 'Red, yellow, blue',
        answer3: 'Red, blue, yellow'
    },
    {
        question: 'Q2: which vehicle goes last?',
        answer1: 'The red vehicle',
        answer2: 'The blue vehicle',
        answer3: 'The yellow vehicle'
    },
    {
        question: 'Q3: which vehicle goes first?',
        answer1: 'The blue vehicle',
        answer2: 'The yellow vehicle',
        answer3: 'The red vehicle'
    },
    {
        question: 'Q4: when should the red vehicle proceed?',
        answer1: 'Before the yellow vehicle',
        answer2: 'Before the blue vehicle',
        answer3: 'After both vehicles'
    },
    {
        question: 'Q5: which vehicle must give way?',
        answer1: 'The yellow vehicle',
        answer2: 'The red vehicle',
        answer3: 'Both proceed at the same time'
    },
    {
        question: 'Q6: which vehicle must give way?',
        answer1: 'The yellow vehicle',
        answer2: 'The red vehicle',
        answer3: 'Both proceed at the same time'
    },
    {
        question: 'Q7: which vehicles proceed at the same time?',
        answer1: 'The yellow and blue vehicles',
        answer2: 'The yellow and red vehicles',
        answer3: 'The blue and red vehicles'
    }
]

const WHEELS = {
    yellowCar: {
        frontRight: 'SUV_FrontRightWheel',
        frontLeft: 'SUV_FrontLeftWheel',
        back: 'SUV_BackWheels'
    },
    redCar: {
        frontRight: 'NormalCar1_FrontRightWheel',
        frontLeft: 'NormalCar1_FrontLeftWheel',
        back: 'NormalCar1_BackWheels'
    },
    blueCar: {
        frontRight: 'SportsCar_FrontRightWheel',
        frontLeft: 'SportsCar_FrontLeftWheel',
        back: 'SportsCar_BackWheels'
    }
}

const BLINKINGLIGHTS = {
    yellow: {
        left: {
            front: new Vec3(0.83, 0.66, 1.76),
            back: new Vec3(0.76, 0.83, -1.68)
        },
        right: {
            front: new Vec3(-0.83, 0.66, 1.76),
            back: new Vec3(-0.76, 0.83, -1.68)
        }
    },
    red: {
        left: {
            front: new Vec3(0.72, 0.48, 1.86),
            back: new Vec3(0.68, 0.60, -1.80)
        },
        right: {
            front: new Vec3(-0.72, 0.48, 1.86),
            back: new Vec3(-0.68, 0.60, -1.80)
        }
    },
    blue: {
        left: {
            front: new Vec3(0.72, 0.45, 1.64),
            back: new Vec3(0.62, 0.66, -1.68)
        },
        right: {
            front: new Vec3(-0.72, 0.45, 1.64),
            back: new Vec3(-0.62, 0.66, -1.68)
        }
    }
}

const LISTENER = new AudioListener();
const audioLoader = new AudioLoader();
const AUDIOS = [{}, {}, {}, {}, {}, {}, {}];

audioLoader.load('./assets/sounds/q1.mp3', function(buffer) {
    AUDIOS[0].question = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load('./assets/sounds/q1a1.mp3' , function(buffer) {
    AUDIOS[0].answer1 = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load('./assets/sounds/q1a2.mp3', function(buffer) {
    AUDIOS[0].answer2 = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load('./assets/sounds/q1a3.mp3' , function(buffer) {
    AUDIOS[0].answer3 = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load('./assets/sounds/q2.mp3', function(buffer) {
    AUDIOS[1].question = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load('./assets/sounds/q2a1.mp3' , function(buffer) {
    AUDIOS[1].answer1 = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load('./assets/sounds/q2a2.mp3', function(buffer) {
    AUDIOS[1].answer2 = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load('./assets/sounds/q2a3.mp3' , function(buffer) {
    AUDIOS[1].answer3 = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load('./assets/sounds/q3.mp3', function(buffer) {
    AUDIOS[2].question = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load('./assets/sounds/q3a1.mp3' , function(buffer) {
    AUDIOS[2].answer1 = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load('./assets/sounds/q3a2.mp3', function(buffer) {
    AUDIOS[2].answer2 = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load('./assets/sounds/q3a3.mp3' , function(buffer) {
    AUDIOS[2].answer3 = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load('./assets/sounds/q4.mp3', function(buffer) {
    AUDIOS[3].question = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load('./assets/sounds/q4a1.mp3' , function(buffer) {
    AUDIOS[3].answer1 = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load('./assets/sounds/q4a2.mp3', function(buffer) {
    AUDIOS[3].answer2 = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load('./assets/sounds/q4a3.mp3' , function(buffer) {
    AUDIOS[3].answer3 = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load('./assets/sounds/q5.mp3', function(buffer) {
    AUDIOS[4].question = new Audio(LISTENER).setBuffer(buffer);
    AUDIOS[5].question = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load('./assets/sounds/q5a1.mp3' , function(buffer) {
    AUDIOS[4].answer1 = new Audio(LISTENER).setBuffer(buffer);
    AUDIOS[5].answer1 = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load('./assets/sounds/q5a2.mp3', function(buffer) {
    AUDIOS[4].answer2 = new Audio(LISTENER).setBuffer(buffer);
    AUDIOS[5].answer2 = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load('./assets/sounds/q5a3.mp3' , function(buffer) {
    AUDIOS[4].answer3 = new Audio(LISTENER).setBuffer(buffer);
    AUDIOS[5].answer3 = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load('./assets/sounds/q7.mp3', function(buffer) {
    AUDIOS[6].question = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load('./assets/sounds/q7a1.mp3' , function(buffer) {
    AUDIOS[6].answer1 = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load('./assets/sounds/q7a2.mp3', function(buffer) {
    AUDIOS[6].answer2 = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load('./assets/sounds/q7a3.mp3' , function(buffer) {
    AUDIOS[6].answer3 = new Audio(LISTENER).setBuffer(buffer);
});

export {
    YELLOWVEHICLESPATHS,
    REDVEHICLESPATHS,
    BLUEVEHICLESPATHS,
    ANSWERSTEXT,
    WHEELS,
    BLINKINGLIGHTS,
    LISTENER,
    AUDIOS
}