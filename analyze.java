import java.awt.Robot;
import java.awt.event.*;

class analyze{

    public static void main(String args[]){
	try{
            Robot robot = new Robot();
	    robot.delay(1000);
	    robot.mouseMove(100, 85);
	    robot.mousePress( InputEvent.BUTTON1_MASK );
	    robot.mouseRelease( InputEvent.BUTTON1_MASK );
	    robot.delay(1000);
            robot.keyPress(KeyEvent.VK_A);
            robot.keyRelease(KeyEvent.VK_A);
            robot.keyPress(KeyEvent.VK_N);
            robot.keyRelease(KeyEvent.VK_N);
            robot.keyPress(KeyEvent.VK_A);
            robot.keyRelease(KeyEvent.VK_A);
	    robot.keyPress(KeyEvent.VK_L);
	    robot.keyRelease(KeyEvent.VK_L);
            robot.keyPress(KeyEvent.VK_Y);
	    robot.keyRelease(KeyEvent.VK_Y);
            robot.keyPress(KeyEvent.VK_T);
            robot.keyRelease(KeyEvent.VK_T);
	    robot.keyPress(KeyEvent.VK_I);
            robot.keyRelease(KeyEvent.VK_I);
            robot.keyPress(KeyEvent.VK_C);
	    robot.keyRelease(KeyEvent.VK_C);
            robot.keyPress(KeyEvent.VK_S);
            robot.keyRelease(KeyEvent.VK_S);
	    robot.keyPress(KeyEvent.VK_PERIOD);
	    robot.keyRelease(KeyEvent.VK_PERIOD);
            robot.keyPress(KeyEvent.VK_G);
            robot.keyRelease(KeyEvent.VK_G);
            robot.keyPress(KeyEvent.VK_O);
            robot.keyRelease(KeyEvent.VK_O);
	    robot.keyPress(KeyEvent.VK_O);
            robot.keyRelease(KeyEvent.VK_O);
            robot.keyPress(KeyEvent.VK_G);
            robot.keyRelease(KeyEvent.VK_G);
            robot.keyPress(KeyEvent.VK_L);
            robot.keyRelease(KeyEvent.VK_L);
	    robot.keyPress(KeyEvent.VK_E);
            robot.keyRelease(KeyEvent.VK_E);
            robot.keyPress(KeyEvent.VK_PERIOD);
            robot.keyRelease(KeyEvent.VK_PERIOD);
            robot.keyPress(KeyEvent.VK_C);
            robot.keyRelease(KeyEvent.VK_C);
	    robot.keyPress(KeyEvent.VK_O);
            robot.keyRelease(KeyEvent.VK_O);
            robot.keyPress(KeyEvent.VK_M);
            robot.keyRelease(KeyEvent.VK_M);
            robot.keyPress(KeyEvent.VK_ENTER);
            robot.keyRelease(KeyEvent.VK_ENTER);
	    robot.delay(3000);
	    robot.keyPress(KeyEvent.VK_E);
            robot.keyRelease(KeyEvent.VK_E);
	    robot.keyPress(KeyEvent.VK_S);
            robot.keyRelease(KeyEvent.VK_S);
	    robot.keyPress(KeyEvent.VK_P);
            robot.keyRelease(KeyEvent.VK_P);
	    robot.keyPress(KeyEvent.VK_I);
            robot.keyRelease(KeyEvent.VK_I);
	    robot.keyPress(KeyEvent.VK_R);
            robot.keyRelease(KeyEvent.VK_R);
	    robot.keyPress(KeyEvent.VK_O);
            robot.keyRelease(KeyEvent.VK_O);
	    robot.keyPress(KeyEvent.VK_1);
            robot.keyRelease(KeyEvent.VK_1);
	    robot.keyPress(KeyEvent.VK_8);
            robot.keyRelease(KeyEvent.VK_8);
	    robot.keyPress(KeyEvent.VK_SHIFT);
	    robot.keyPress(KeyEvent.VK_2);
	    robot.keyRelease(KeyEvent.VK_2);
	    robot.keyRelease(KeyEvent.VK_SHIFT);
	    robot.keyPress(KeyEvent.VK_A);
            robot.keyRelease(KeyEvent.VK_A);
	    robot.keyPress(KeyEvent.VK_M);
            robot.keyRelease(KeyEvent.VK_M);
	    robot.keyPress(KeyEvent.VK_H);
            robot.keyRelease(KeyEvent.VK_H);
	    robot.keyPress(KeyEvent.VK_E);
            robot.keyRelease(KeyEvent.VK_E);
	    robot.keyPress(KeyEvent.VK_R);
            robot.keyRelease(KeyEvent.VK_R);
	    robot.keyPress(KeyEvent.VK_S);
            robot.keyRelease(KeyEvent.VK_S);
	    robot.keyPress(KeyEvent.VK_T);
            robot.keyRelease(KeyEvent.VK_T);
	    robot.keyPress(KeyEvent.VK_PERIOD);
            robot.keyRelease(KeyEvent.VK_PERIOD);
	    robot.keyPress(KeyEvent.VK_E);
            robot.keyRelease(KeyEvent.VK_E);
	    robot.keyPress(KeyEvent.VK_D);
            robot.keyRelease(KeyEvent.VK_D);
	    robot.keyPress(KeyEvent.VK_U);
            robot.keyRelease(KeyEvent.VK_U);
	    robot.keyPress(KeyEvent.VK_ENTER);
            robot.keyRelease(KeyEvent.VK_ENTER);
	    robot.delay(2000);
	    robot.keyPress(KeyEvent.VK_ENTER);
            robot.keyRelease(KeyEvent.VK_ENTER);
	    robot.delay(20000);
	    robot.mouseMove(400,730);
	    robot.delay(1000);
	    robot.mousePress( InputEvent.BUTTON1_MASK );                                                                                                                       
            robot.mouseRelease( InputEvent.BUTTON1_MASK );                                                                                               
	    robot.mousePress( InputEvent.BUTTON1_MASK );
            robot.mouseRelease( InputEvent.BUTTON1_MASK );
	    robot.delay(3000);
	    robot.mouseMove(340,665);
            robot.delay(200);
            robot.mousePress( InputEvent.BUTTON1_MASK );
            robot.mouseRelease( InputEvent.BUTTON1_MASK );
            robot.delay(1000);
	
	} catch (Exception e){
	    e.printStackTrace();
	}
    }

    public static void pause(Robot robot){
	robot.delay(100);
    }

}