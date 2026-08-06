package in.fm.formmaster.User;



public class UserMapper {

    public static UserSummaryDTO toSummaryDTO(User user){

        if(user == null){
            return null;
        }

        UserSummaryDTO dto = new UserSummaryDTO();

        dto.setId(user.getId());
        dto.setFirstname(user.getFirstname());
        dto.setLastname(user.getLastname());


        return dto;
    }
}
