import ErrorRepository from "../errorRepository.js";

describe('class ErrorRepository', () => {
    let errorRepository;
        beforeEach(() => {
            errorRepository = new ErrorRepository();
            errorRepository.addErrors(404, 'Сервер недоступен');
            errorRepository.addErrors(400, 'Bad Request');
        });

        it('create errors', () => {
            expect(errorRepository.translate(404)).toBe('Сервер недоступен');
            expect(errorRepository.translate(400)).toBe('Bad Request');
            expect(errorRepository.translate(200)).toBe('Unknown error');
        });
});
