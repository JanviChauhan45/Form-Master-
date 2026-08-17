package in.fm.formmaster.Form;

import in.fm.formmaster.Characteristics.Characteristics;
import in.fm.formmaster.Characteristics.CharacteristicsRepository;
import in.fm.formmaster.Module.Module;
import in.fm.formmaster.Module.ModuleRepository;
import in.fm.formmaster.ModuleCharacteristicsMapping.ModuleCharRepository;
import in.fm.formmaster.Month.Month;
import in.fm.formmaster.Month.MonthRepository;
import in.fm.formmaster.Recurrance.Recurrance;
import in.fm.formmaster.Recurrance.RecurranceRepository;
import in.fm.formmaster.SubCharacteristics.SubCharacterisicsRepository;
import in.fm.formmaster.SubCharacteristics.SubCharacteristics;
import in.fm.formmaster.User.User;
import in.fm.formmaster.User.UserMapper;
import in.fm.formmaster.constants.AppConstants;
import in.fm.formmaster.exception.ResourceNotFound;
import in.fm.formmaster.utility.RequestUtils;
import in.fm.formmaster.utility.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.List;

@Service
public class FormServiceImpl implements FormService {

    @Autowired
    private FormRepository repo;

    @Autowired
    private ModuleRepository moduleRepo;

    @Autowired
    private CharacteristicsRepository characRepo;

    @Autowired
    private SubCharacterisicsRepository subcharacRepo;

    @Autowired
    private RecurranceRepository recurRepo;

    @Autowired
    private MonthRepository monthRepo;

    @Autowired
    private ModuleCharRepository moduleCharRepo;

    private final SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");


    // =========================================================
    // CREATE
    // =========================================================

    @Override
    public FormDTO addForm(FormDTO dto) {

        User loggedInUser = SecurityUtils.getLoggedInUser();

        Form form = new Form();


        // -----------------------------------------------------
        // 1. Find Module
        // -----------------------------------------------------

        Module module = moduleRepo.findById(dto.getModuleid())
                .orElseThrow(() ->
                        new ResourceNotFound(
                                "Module not found at Id "
                                        + dto.getModuleid()
                        )
                );


        // -----------------------------------------------------
        // 2. Find Characteristics
        // -----------------------------------------------------

        Characteristics characteristics =
                characRepo.findById(dto.getCharacteristicsid())
                        .orElseThrow(() ->
                                new ResourceNotFound(
                                        "Characteristics not found at Id "
                                                + dto.getCharacteristicsid()
                                )
                        );


        // -----------------------------------------------------
        // 3. Validate Module → Characteristics mapping
        // -----------------------------------------------------

        boolean mappingExists =
                moduleCharRepo
                        .existsByModuleId_IdAndCharacteristicId_Id(
                                dto.getModuleid(),
                                dto.getCharacteristicsid()
                        );

        if (!mappingExists) {

            throw new ResourceNotFound(
                    "Selected Characteristics is not mapped to selected Module"
            );
        }


        // -----------------------------------------------------
        // 4. Find Sub Characteristics
        // -----------------------------------------------------

        SubCharacteristics subCharacteristics =
                subcharacRepo.findById(
                                dto.getSubCharacteristicsid()
                        )
                        .orElseThrow(() ->
                                new ResourceNotFound(
                                        "Sub Characteristics not found at Id "
                                                + dto.getSubCharacteristicsid()
                                )
                        );


        // -----------------------------------------------------
        // 5. Validate Characteristics → SubCharacteristics
        // -----------------------------------------------------

        if (!subCharacteristics
                .getCharid()
                .getId()
                .equals(dto.getCharacteristicsid())) {

            throw new ResourceNotFound(
                    "Selected Sub Characteristics does not belong to selected Characteristics"
            );
        }


        // -----------------------------------------------------
        // 6. Find Recurrance
        // -----------------------------------------------------

        Recurrance recurrance =
                recurRepo.findById(dto.getRecurranceid())
                        .orElseThrow(() ->
                                new ResourceNotFound(
                                        "Recurrance not found at Id "
                                                + dto.getRecurranceid()
                                )
                        );


        // -----------------------------------------------------
        // 7. Find Month
        // -----------------------------------------------------

        Month month =
                monthRepo.findById(dto.getMonth())
                        .orElseThrow(() ->
                                new ResourceNotFound(
                                        "Month not found at Id "
                                                + dto.getMonth()
                                )
                        );


        // -----------------------------------------------------
        // 8. Set Form data
        // -----------------------------------------------------

        form.setTitle(dto.getTitle());

        form.setDescription(dto.getDescription());
        form.setAliasname(dto.getAlias());

        try {
            form.setEffectiveDate(sdf.parse(dto.getEffectiveDate()));
        } catch (Exception e) {
            throw new IllegalArgumentException(
                    "Invalid effective date. Expected format: dd/MM/yyyy"
            );
        }

        form.setCompliancePeriod(
                dto.getCompliancePeriod()
        );

        form.setActive(AppConstants.ACTIVE);


        // -----------------------------------------------------
        // 9. Set relationships
        // -----------------------------------------------------

        form.setModuleid(module);

        form.setCharacteristicid(characteristics);

        form.setSubCharacteristicid(
                subCharacteristics
        );

        form.setRecurranceid(recurrance);

        form.setMonthId(month);


        // -----------------------------------------------------
        // 10. Audit
        // -----------------------------------------------------

        form.setCreatedBy(loggedInUser);

        form.setModifiedBy(loggedInUser);

        form.setIpAddress(
                RequestUtils.getIpAddress()
        );


        // -----------------------------------------------------
        // 11. Save
        // -----------------------------------------------------

        Form saved = repo.save(form);


        // -----------------------------------------------------
        // 12. Convert Entity → DTO
        // -----------------------------------------------------

        return mapToDTO(saved);
    }


    // =========================================================
    // UPDATE
    // =========================================================

    @Override
    public FormDTO updateForm(FormDTO dto, Long id) {

        User loggedInUser = SecurityUtils.getLoggedInUser();


        // -----------------------------------------------------
        // 1. Find existing Form
        // -----------------------------------------------------

        Form form = repo.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFound(
                                "Form not found at Id " + id
                        )
                );


        // -----------------------------------------------------
        // 2. Check if Form is deleted
        // -----------------------------------------------------

        if (form.getActive() != null &&
                form.getActive().equals(9)) {

            throw new ResourceNotFound(
                    "Form is already deleted"
            );
        }


        // -----------------------------------------------------
        // 3. Find Module
        // -----------------------------------------------------

        Module module = moduleRepo.findById(dto.getModuleid())
                .orElseThrow(() ->
                        new ResourceNotFound(
                                "Module not found at Id "
                                        + dto.getModuleid()
                        )
                );


        // -----------------------------------------------------
        // 4. Find Characteristics
        // -----------------------------------------------------

        Characteristics characteristics =
                characRepo.findById(dto.getCharacteristicsid())
                        .orElseThrow(() ->
                                new ResourceNotFound(
                                        "Characteristics not found at Id "
                                                + dto.getCharacteristicsid()
                                )
                        );


        // -----------------------------------------------------
        // 5. Validate Module → Characteristics mapping
        // -----------------------------------------------------

        boolean mappingExists =
                moduleCharRepo
                        .existsByModuleId_IdAndCharacteristicId_Id(
                                dto.getModuleid(),
                                dto.getCharacteristicsid()
                        );

        if (!mappingExists) {

            throw new ResourceNotFound(
                    "Selected Characteristics is not mapped to selected Module"
            );
        }


        // -----------------------------------------------------
        // 6. Find Sub Characteristics
        // -----------------------------------------------------

        SubCharacteristics subCharacteristics =
                subcharacRepo.findById(
                                dto.getSubCharacteristicsid()
                        )
                        .orElseThrow(() ->
                                new ResourceNotFound(
                                        "Sub Characteristics not found at Id "
                                                + dto.getSubCharacteristicsid()
                                )
                        );


        // -----------------------------------------------------
        // 7. Validate Characteristics → SubCharacteristics
        // -----------------------------------------------------

        if (!subCharacteristics
                .getCharid()
                .getId()
                .equals(dto.getCharacteristicsid())) {

            throw new ResourceNotFound(
                    "Selected Sub Characteristics does not belong to selected Characteristics"
            );
        }


        // -----------------------------------------------------
        // 8. Find Recurrance
        // -----------------------------------------------------

        Recurrance recurrance =
                recurRepo.findById(dto.getRecurranceid())
                        .orElseThrow(() ->
                                new ResourceNotFound(
                                        "Recurrance not found at Id "
                                                + dto.getRecurranceid()
                                )
                        );


        // -----------------------------------------------------
        // 9. Find Month
        // -----------------------------------------------------

        Month month =
                monthRepo.findById(dto.getMonth())
                        .orElseThrow(() ->
                                new ResourceNotFound(
                                        "Month not found at Id "
                                                + dto.getMonth()
                                )
                        );


        // -----------------------------------------------------
        // 10. Update Form data
        // -----------------------------------------------------

        form.setTitle(dto.getTitle());
        form.setAliasname(dto.getAlias());

        form.setDescription(dto.getDescription());

        try {
            form.setEffectiveDate(
                    sdf.parse(dto.getEffectiveDate())
            );
        } catch (Exception e) {
            throw new IllegalArgumentException(
                    "Invalid effective date. Expected format: dd/MM/yyyy"
            );
        }

        form.setCompliancePeriod(
                dto.getCompliancePeriod()
        );


        // -----------------------------------------------------
        // 11. Update relationships
        // -----------------------------------------------------

        form.setModuleid(module);

        form.setCharacteristicid(characteristics);

        form.setSubCharacteristicid(
                subCharacteristics
        );

        form.setRecurranceid(recurrance);

        form.setMonthId(month);


        // -----------------------------------------------------
        // 12. Modified audit
        // -----------------------------------------------------

        form.setModifiedBy(loggedInUser);

        form.setIpAddress(
                RequestUtils.getIpAddress()
        );



        Form updated = repo.save(form);



        return mapToDTO(updated);
    }


    // =========================================================
    // DELETE
    // =========================================================

    @Override
    public String delete(Long id) {

        User loggedInUser = SecurityUtils.getLoggedInUser();


        // -----------------------------------------------------
        // 1. Find Form
        // -----------------------------------------------------

        Form form = repo.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFound(
                                "Form not found at Id " + id
                        )
                );


        // -----------------------------------------------------
        // 2. Check already deleted
        // -----------------------------------------------------

        if (form.getActive() != null &&
                form.getActive().equals(9)) {

            throw new ResourceNotFound(
                    "Form is already deleted"
            );
        }


        // -----------------------------------------------------
        // 3. Soft delete
        // -----------------------------------------------------

        form.setActive(9);


        // -----------------------------------------------------
        // 4. Audit
        // -----------------------------------------------------

        form.setModifiedBy(loggedInUser);

        form.setIpAddress(
                RequestUtils.getIpAddress()
        );


        // -----------------------------------------------------
        // 5. Save
        // -----------------------------------------------------

        repo.save(form);


        return "Form deleted successfully";
    }


    // =========================================================
    // GET ALL
    // =========================================================

    @Override
    public List<FormDTO> getAll() {

        List<Form> list =
                repo.findByActiveNot(9);

        return list.stream()
                .map(this::mapToDTO)
                .toList();
    }


    // =========================================================
    // GET BY ID
    // =========================================================

    @Override
    public FormDTO getById(Long id) {

        Form form = repo.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFound(
                                "Form not found at Id " + id
                        )
                );


        if (form.getActive() != null &&
                form.getActive().equals(9)) {

            throw new ResourceNotFound(
                    "Form not found at Id " + id
            );
        }


        return mapToDTO(form);
    }


    // =========================================================
    // ENTITY → DTO
    // =========================================================

    private FormDTO mapToDTO(Form form) {

        FormDTO dto = new FormDTO();


        dto.setId(
                form.getId()
        );


        dto.setTitle(
                form.getTitle()
        );


        dto.setDescription(
                form.getDescription()
        );
        dto.setAlias(form.getAliasname());


        dto.setModuleid(
                form.getModuleid()
                        .getId()
        );


        dto.setCharacteristicsid(
                form.getCharacteristicid()
                        .getId()
        );


        dto.setSubCharacteristicsid(
                form.getSubCharacteristicid()
                        .getId()
        );


        dto.setRecurranceid(
                form.getRecurranceid()
                        .getId()
        );


        dto.setMonth(
                form.getMonthId()
                        .getId()
        );


        if (form.getEffectiveDate() != null) {
            dto.setEffectiveDate(
                    sdf.format(form.getEffectiveDate())
            );
        }

        dto.setCompliancePeriod(
                form.getCompliancePeriod()
        );


        dto.setActive(
                form.getActive()
        );


        if (form.getCreatedBy() != null) {

            dto.setCreatedBy(
                    UserMapper.toSummaryDTO(
                            form.getCreatedBy()
                    )
            );
        }


        if (form.getModifiedBy() != null) {

            dto.setModifiedBy(
                    UserMapper.toSummaryDTO(
                            form.getModifiedBy()
                    )
            );
        }


        dto.setCreatedOn(
                form.getCreatedOn()
        );


        dto.setModifiedOn(
                form.getModifiedOn()
        );


        return dto;
    }
}