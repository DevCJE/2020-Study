//package net.slipp;
//
//import net.slipp.dto.UserDto;
//import org.apache.catalina.User;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.web.bind.annotation.ModelAttribute;
//
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
//import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//@RunWith(SpringRunner.class)
//@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)
//@AutoConfigureMockMvc
//public class FormTests {
//
//    @Autowired
//    MockMvc mockMvc;
//
//
//    // 해당 Test는 해당 주소 MVC의 전체적인 구동이 제대로 이루어지는지에 대해서 확인해보는 용도
//    @Test
//    public void form() throws Exception {
//        mockMvc.perform(get("/user/form"))
//                .andExpect(status().is(200))
//                .andDo(print());
//    }
//
//    @Test
//    public void main() throws Exception {
//        mockMvc.perform(get("/"))
//                .andExpect(status().is(200))
//                .andDo(print());
//    }
//
//    @Test
//    public void list() throws Exception {
//        mockMvc.perform(get("/user/list"))
//                .andExpect(status().is(200))
//                .andDo(print());
//    }
//
//}
